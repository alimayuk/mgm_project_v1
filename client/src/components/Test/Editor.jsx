"use client";
import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const Editor = () => {
  return (
    <div>
      <SunEditor
        lang={"tr"}
        setDefaultStyle="font-family: arial;"
        setOptions={{
          imageGalleryUrl:
            "https://etyswjpn79.execute-api.ap-northeast-1.amazonaws.com/suneditor-demo",
          buttonList: [
            [
              "formatBlock",
              "paragraphStyle",
              "blockquote",
              "bold",
              "underline",
              "italic",
              "fontColor",
              "hiliteColor",
              "textStyle",
              "removeFormat",
              "outdent",
              "indent",
              "align",
              "list",
              "lineHeight",
              "table",
              "link",
              "image",
              "imageGallery",
              "fullScreen",
              "showBlocks",
              "codeView",
              "preview",
            ],
          ],
        }}
      />
    </div>
  );
};
export default Editor;
