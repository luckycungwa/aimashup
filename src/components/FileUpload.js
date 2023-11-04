import React, {  useState } from "react";
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
  axios.post("http://localhost:3000/extractText", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => {
    // extract text from the uploaded file
    setExtractedText(res.data.text);
  }).catch((err) => {
    // handle error
    console.log(err);
    console.log("Error:", err);
  })

//   const onDrop = (ecceptedFiles) => {
//     const file = ecceptedFiles[0];
//     setFiles(file);

//     const formData = new FormData();
//     formData.append("image", file);

//     axios.post("http://localhost:3000/extractText", formData, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// }).then((res) => {
//   setExtractedText(res.data.text);
//   // console.log(res.data.text);
// }).catch((err) => {
//   console.log(err);
//   console.log("Error:", err);
// });
      
  };

  return (
    <>
      <div>fileUpload</div>
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
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
