import React, { useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";

const FileUpload = () => {
  const [files, setFiles] = useState("");
  const [extractedText, setExtractedText] = useState("");

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFiles(file);

    const formData = new FormData();
    formData.append("image", file);
    axios
      .post("http://localhost:3000/extractText", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        // extract text from the uploaded file
        setExtractedText(res.data.text);
      })
      .catch((err) => {
        // handle error
        console.log(err);
        console.log("Error:", err);
      });
  };

  return (
    <>
      <div>fileUpload</div>
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
    </>
  );
};

export default FileUpload;
