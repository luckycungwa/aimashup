import React, { useState } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";

const FileUpload = () => {
  const [files, setFiles] = useState(null);
  const [extractedText, setExtractedText] = useState("");

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFiles(file);

    const formData = new FormData();
    formData.append("image", file);

    // Replace with your Azure Computer Vision API endpoint and API key
    const endpoint = "https://aimesh.cognitiveservices.azure.com/vision/v3.0/ocr"; // Include /vision/v3.0/ocr for OCR
    const apiKey = "34c005ae79904a52954d09445643780b"; // Your API key

    // Convert the PDF to an image format
    const image = new Image();
    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
      image.onload = async function () {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
        const imageData = canvas.toDataURL("image/jpeg"); // You can change the format to PNG if needed

        formData.append("image", imageData);

        try {
          const response = await axios.post(endpoint, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "Ocp-Apim-Subscription-Key": apiKey,
            },
          });

          // Extracted text from the API response
          setExtractedText(response.data.regions[0].lines.map((line) => line.words.map((word) => word.text).join(" ")).join("\n"));
        } catch (error) {
          // Handle errors
          console.error("Error:", error);
        }
      };
    };
    reader.readAsDataURL(file);
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
