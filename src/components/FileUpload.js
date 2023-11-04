import React, { useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";

const FileUpload = () => {
  const [files, setFiles] = useState("");
  const [extractedText, setExtractedText] = useState("");

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFiles(file);

    const formData = new FormData();
    formData.append("image", file);

    // Replace with your Azure Computer Vision API endpoint and API key
    const endpoint = "YOUR_AZURE_COMPUTER_VISION_ENDPOINT";
    const apiKey = "YOUR_AZURE_COMPUTER_VISION_API_KEY";

    try {
      const response = await axios.post(`${endpoint}/read/analyze`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "Ocp-Apim-Subscription-Key": apiKey,
        },
      });

      // Extracted text from the API response
      setExtractedText(response.data.text);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div>FileUpload</div>
      <div className="tipContainer">
        <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p className="tipText">Drag 'n' drop some files here, or click to select files</p>
            </div>
          )}
        </Dropzone>
      </div>

      {files && (
        <div>
          <h3>File Details:</h3>
          <p>Name: {files.name}</p> <p>Size: {files.size}</p>
        </div>
      )}

      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}
    </>
  );
};

export default FileUpload;
