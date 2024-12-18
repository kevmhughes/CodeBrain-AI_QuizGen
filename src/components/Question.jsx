/* eslint-disable */
import React from "react";
import ReactMarkdown from "react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import xml from "react-syntax-highlighter/dist/cjs/languages/hljs/xml";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
SyntaxHighlighter.registerLanguage("xml", xml);
SyntaxHighlighter.registerLanguage("javascript", javascript);
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Question = ({ questions, index, AiDb, randomDb }) => {
  const questionData = questions[index];
  const codeSnippets = questionData.codeExamples;
  const markdownContent = questions[index].codeExamples;

  return (
    <>
      <div className="question-container">{questions[index].question}</div>
      {/* Code exmples and answers below */}
      {/* When ferching from questions/random endpoint */}
      {randomDb && codeSnippets && codeSnippets.length > 0 && (
        <div className="react-markdown-wrapper">
          {codeSnippets.map((snippet, idx) => (
            <div key={idx}>
              <SyntaxHighlighter language="javascript" style={docco}>
                {snippet}
              </SyntaxHighlighter>
            </div>
          ))}
        </div>
      )}
      {/* When fetching from questions/ai endpoint */}
      {AiDb && (
        <div className="react-markdown-wrapper">
          <ReactMarkdown
            children={markdownContent}
            components={{
              code({ node, inline, className, children, ...props }) {
                const language = className.replace("language-", "");
                return !inline ? (
                  <SyntaxHighlighter
                    language={language}
                    style={docco}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...props}>{children}</code>
                );
              },
            }}
          />
        </div>
      )}
    </>
  );
};

export default Question;
