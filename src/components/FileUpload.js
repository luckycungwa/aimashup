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
    const endpoint = "https://aimashupvision.cognitiveservices.azure.com/";         //endpoint key from th azure sevrice
    const apiKey = "3c85d2abaa2e4eaf8d2453443def9f79";                                //API key from azure

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
    <div className="uploadSection">
      <div>
      <p className="title3">Upload your CV</p>
      
      </div>
      <div className="tipContainer">
      <Dropzone onDrop={onDrop}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {/* DROP FILE SECTION */}
              <div className="tipContainer">
              <div>
              <img className="uploadIcon" src="noun-upload.svg" alt="Icon" />
              </div>
                <p className="tipText">
                  Drag 'n' drop some files here, or click to select files
                </p>
              </div>
            </div>
          )}
        </Dropzone>
      </div>

      {files && (
        <div>
          <h3 className="title4">File Details:</h3>
          <p className="title5"> {files.name}</p> <p className="lightText">Size: {files.size}</p>
        </div>
      )}

      {extractedText && (
        <div>
          <h3>Extracted Text:</h3>
          <p>{extractedText}</p>
        </div>
      )}
      </div>
    </>
  );
};

export default FileUpload;
