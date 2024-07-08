import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../config";
const Page = () => {
  const params = useParams();
  const divRef = useRef();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(
          `${BASE_URL}/v1/api/note/${params.domainName}/`
        );
        setData(resp.data.content);
        divRef.current.textContent = resp.data.content;
        divRef.current.focus();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDataChange = () => {
    setData(divRef.current.textContent);
  };

  // This use effect is performing `debouncing` 
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      axios
        .post(`${BASE_URL}/v1/api/note/`, {
          key: params.domainName,
          content: data,
        })
        .catch((error) => {
          console.error("Error saving data:", error);
        });
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [data]);

  useLayoutEffect(() => {
    const range = document.createRange();
    const selection = window.getSelection();
    range.selectNodeContents(divRef.current);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }, [data]);

  return (
    <>
      <div
        ref={divRef}
        className="note-container"
        contentEditable="plaintext-only"
        suppressContentEditableWarning={true}
        onInput={handleDataChange}
      ></div>
    </>
  );
};

export default Page;
