import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";

type CSVFileImportProps = {
  url: string;
  title: string;
};

export default function CSVFileImport({ url, title }: CSVFileImportProps) {
  const [file, setFile] = useState<File>();
  const [status, setStatus] = useState("");

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus("");
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
    }
  };

  const removeFile = () => {
    setFile(undefined);
    setStatus("");
  };

  const uploadFile = async () => {
    if (!file) return;

    try {
      setStatus("Requesting signed URL...");
      const authorization_token = localStorage.getItem("authorization_token");

      if (!authorization_token) {
        setStatus("Unauthorized: Authorization header missing");
        setFile(undefined);
        return;
      }

      const response = await axios.get(url, {
        params: { name: encodeURIComponent(file.name) },
        headers: {
          Authorization: `Basic ${authorization_token}`,
          "Content-Type": "application/json",
        },
      });

      const signedUrl = response.data;

      setStatus("Uploading file...");
      await axios.put(signedUrl, file, {
        headers: {
          "Content-Type": "text/csv",
        },
      });

      setStatus("Upload successful!");
      setFile(undefined);
    } catch (err: any) {
      console.log("Upload failed:", err);

      if (err.response) {
        if (err.response.status === 401) {
          setStatus("Unauthorized: Authorization header missing");
        } else if (err.response.status === 403 || err.name === "AxiosError") {
          setStatus("Forbidden: invalid authorization token");
        } else {
          setStatus("Upload failed!");
        }
        setFile(undefined);
      }
    }
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {!file ? (
        <input type="file" onChange={onFileChange} />
      ) : (
        <div>
          <button onClick={removeFile}>Remove file</button>
          <button onClick={uploadFile}>Upload file</button>
        </div>
      )}
      {status && <p>{status}</p>}
    </Box>
  );
}
