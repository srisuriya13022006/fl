// src/pages/Compiler.jsx

import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./Compiler.css";

/* ── Starter code snippets per language ── */
const STARTER_CODE = {
  javascript: `// Fortune Tech Labs — JavaScript Playground
function greet(name) {
  return \`Hello, \${name}! Welcome to Fortune Tech Labs.\`;
}

const students = ["Arjun", "Priya", "Ravi", "Sneha"];

students.forEach((student) => {
  console.log(greet(student));
});

console.log("\\n✅ Total students:", students.length);
`,
  python: `# Fortune Tech Labs — Python Playground
def greet(name):
    return f"Hello, {name}! Welcome to Fortune Tech Labs."

students = ["Arjun", "Priya", "Ravi", "Sneha"]

for student in students:
    print(greet(student))

print(f"\\n✅ Total students: {len(students)}")
`,
  java: `// Fortune Tech Labs — Java Playground
import java.util.Arrays;
import java.util.List;

public class Main {
    public static String greet(String name) {
        return "Hello, " + name + "! Welcome to Fortune Tech Labs.";
    }

    public static void main(String[] args) {
        List<String> students = Arrays.asList("Arjun", "Priya", "Ravi", "Sneha");

        for (String student : students) {
            System.out.println(greet(student));
        }

        System.out.println("\\n✅ Total students: " + students.size());
    }
}
`,
  sql: `-- Fortune Tech Labs — SQL Playground
CREATE TABLE students (
  id       INT PRIMARY KEY AUTO_INCREMENT,
  name     VARCHAR(100) NOT NULL,
  course   VARCHAR(100),
  score    INT
);

INSERT INTO students (name, course, score) VALUES
  ('Arjun', 'MERN Stack', 92),
  ('Priya', 'Java & Spring Boot', 88),
  ('Ravi', 'DSA', 95),
  ('Sneha', 'SQL & DBMS', 90);

-- Query top performers
SELECT name, course, score
FROM   students
WHERE  score >= 90
ORDER  BY score DESC;
`,
  cpp: `// Fortune Tech Labs — C++ Playground
#include <iostream>
#include <vector>
#include <string>
using namespace std;

string greet(const string& name) {
    return "Hello, " + name + "! Welcome to Fortune Tech Labs.";
}

int main() {
    vector<string> students = {"Arjun", "Priya", "Ravi", "Sneha"};

    for (const auto& student : students) {
        cout << greet(student) << endl;
    }

    cout << "\\n✅ Total students: " << students.size() << endl;
    return 0;
}
`,
};

/* ── Simulated outputs per language ── */
const SIMULATED_OUTPUT = {
  javascript: [
    { type: "log",     text: "Hello, Arjun! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Priya! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Ravi! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Sneha! Welcome to Fortune Tech Labs." },
    { type: "blank",   text: "" },
    { type: "success", text: "✅ Total students: 4" },
    { type: "blank",   text: "" },
    { type: "info",    text: "Process exited with code 0" },
  ],
  python: [
    { type: "log",     text: "Hello, Arjun! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Priya! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Ravi! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Sneha! Welcome to Fortune Tech Labs." },
    { type: "blank",   text: "" },
    { type: "success", text: "✅ Total students: 4" },
    { type: "blank",   text: "" },
    { type: "info",    text: "Process finished with exit code 0" },
  ],
  java: [
    { type: "log",     text: "Hello, Arjun! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Priya! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Ravi! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Sneha! Welcome to Fortune Tech Labs." },
    { type: "blank",   text: "" },
    { type: "success", text: "✅ Total students: 4" },
    { type: "blank",   text: "" },
    { type: "info",    text: "BUILD SUCCESSFUL in 1.2s" },
  ],
  sql: [
    { type: "info",    text: "Table `students` created successfully." },
    { type: "info",    text: "4 rows inserted." },
    { type: "blank",   text: "" },
    { type: "table-header", text: "name   | course              | score" },
    { type: "table-div",    text: "-------|---------------------|------" },
    { type: "table-row",    text: "Ravi   | DSA                 |  95" },
    { type: "table-row",    text: "Arjun  | MERN Stack          |  92" },
    { type: "table-row",    text: "Sneha  | SQL & DBMS          |  90" },
    { type: "blank",   text: "" },
    { type: "success", text: "✅ 3 rows returned." },
  ],
  cpp: [
    { type: "log",     text: "Hello, Arjun! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Priya! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Ravi! Welcome to Fortune Tech Labs." },
    { type: "log",     text: "Hello, Sneha! Welcome to Fortune Tech Labs." },
    { type: "blank",   text: "" },
    { type: "success", text: "✅ Total students: 4" },
    { type: "blank",   text: "" },
    { type: "info",    text: "Process exited with code 0" },
  ],
};

const LANGUAGES = [
  { id: "javascript", label: "JavaScript", ext: "js",   icon: "🟨" },
  { id: "python",     label: "Python",     ext: "py",   icon: "🐍" },
  { id: "java",       label: "Java",       ext: "java", icon: "☕" },
  { id: "sql",        label: "SQL",        ext: "sql",  icon: "🗄️" },
  { id: "cpp",        label: "C++",        ext: "cpp",  icon: "⚙️" },
];

const Compiler = () => {
  const [activeLang, setActiveLang]     = useState("javascript");
  const [code, setCode]                 = useState(STARTER_CODE["javascript"]);
  const [output, setOutput]             = useState([]);
  const [running, setRunning]           = useState(false);
  const [hasRun, setHasRun]             = useState(false);
  const [fontSize, setFontSize]         = useState(14);
  const [showSettings, setShowSettings] = useState(false);
  const outputRef = useRef(null);
  const textareaRef = useRef(null);

  /* Keep line numbers in sync */
  const lineCount = code.split("\n").length;

  /* Scroll output to bottom after run */
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  /* Switch language */
  const handleLangSwitch = (langId) => {
    setActiveLang(langId);
    setCode(STARTER_CODE[langId]);
    setOutput([]);
    setHasRun(false);
  };

  /* Simulate run */
  const handleRun = () => {
    if (running) return;
    setRunning(true);
    setOutput([]);
    setHasRun(false);

    const lines = SIMULATED_OUTPUT[activeLang];
    let i = 0;

    const tick = () => {
      if (i < lines.length) {
        setOutput((prev) => [...prev, lines[i]]);
        i++;
        setTimeout(tick, 80);
      } else {
        setRunning(false);
        setHasRun(true);
      }
    };
    setTimeout(tick, 420); // small compile delay
  };

  /* Clear output */
  const handleClear = () => {
    setOutput([]);
    setHasRun(false);
  };

  /* Reset code */
  const handleReset = () => {
    setCode(STARTER_CODE[activeLang]);
    setOutput([]);
    setHasRun(false);
  };

  /* Tab key inside textarea */
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end   = e.target.selectionEnd;
      const newCode = code.substring(0, start) + "  " + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        textareaRef.current.selectionStart = start + 2;
        textareaRef.current.selectionEnd   = start + 2;
      }, 0);
    }
  };

  const activeLangMeta = LANGUAGES.find((l) => l.id === activeLang) || LANGUAGES[0];
  const safeOutput = Array.isArray(output) ? output.filter(Boolean) : [];

  return (
    <div className="compiler-page">
      <Navbar />

      {/* ── Coming Soon Notice ── */}
      <div className="compiler-notice">
        <span className="compiler-notice__icon">⚠️</span>
        <span className="compiler-notice__text">
          Full functional compiler facility available soon
        </span>
      </div>

      {/* ── Top Header ── */}
      <header className="compiler-header">
        <div className="compiler-header__left">
          <div className="compiler-header__brand">
            <span className="compiler-header__logo">⚡</span>
            <span className="compiler-header__name">
              Fortune<span>Tech</span> Compiler
            </span>
          </div>
          <span className="compiler-header__badge badge badge-red">BETA</span>
        </div>

        <div className="compiler-header__right">
          <button
            className="compiler-icon-btn"
            title="Settings"
            onClick={() => setShowSettings((s) => !s)}
          >
            ⚙
          </button>
          <span className="compiler-header__file">
            {activeLangMeta.icon}&nbsp; main.{activeLangMeta.ext}
          </span>
        </div>
      </header>

      {/* ── Font-size settings popover ── */}
      {showSettings && (
        <div className="compiler-settings">
          <span className="compiler-settings__label">Font Size</span>
          <div className="compiler-settings__controls">
            <button onClick={() => setFontSize((f) => Math.max(10, f - 1))}>−</button>
            <span>{fontSize}px</span>
            <button onClick={() => setFontSize((f) => Math.min(22, f + 1))}>+</button>
          </div>
        </div>
      )}

      {/* ── Language Tabs ── */}
      <div className="compiler-tabs">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.id}
            className={`compiler-tab ${activeLang === lang.id ? "compiler-tab--active" : ""}`}
            onClick={() => handleLangSwitch(lang.id)}
          >
            <span className="compiler-tab__icon" aria-hidden="true">{lang.icon}</span>
            <span className="compiler-tab__label">{lang.label}</span>
            {activeLang === lang.id && (
              <span className="compiler-tab__dot" aria-hidden="true" />
            )}
          </button>
        ))}
      </div>

      {/* ── Main Editor Layout ── */}
      <div className="compiler-body">

        {/* LEFT: Editor Panel */}
        <div className="compiler-editor-panel">
          <div className="compiler-panel-header">
            <span className="compiler-panel-title">
              📝 Editor
            </span>
            <div className="compiler-editor-actions">
              <button className="compiler-action-btn" onClick={handleReset} title="Reset code">
                ↺ Reset
              </button>
            </div>
          </div>

          <div className="compiler-editor-wrap">
            {/* Line numbers */}
            <div className="compiler-line-numbers" aria-hidden="true">
              {Array.from({ length: lineCount }, (_, i) => (
                <span key={i + 1}>{i + 1}</span>
              ))}
            </div>

            {/* Code textarea */}
            <textarea
              ref={textareaRef}
              className="compiler-textarea"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              onKeyDown={handleKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              style={{ fontSize: `${fontSize}px` }}
              aria-label="Code editor"
            />
          </div>

          {/* Editor status bar */}
          <div className="compiler-statusbar">
            <span>{activeLangMeta.label}</span>
            <span>Ln {lineCount}</span>
            <span>UTF-8</span>
            <span>Spaces: 2</span>
          </div>
        </div>

        {/* RIGHT: Output Console */}
        <div className="compiler-output-panel">
          <div className="compiler-panel-header">
            <span className="compiler-panel-title">
              🖥 Console Output
            </span>
            <div className="compiler-editor-actions">
              {hasRun && (
                <button className="compiler-action-btn" onClick={handleClear} title="Clear output">
                  ✕ Clear
                </button>
              )}
            </div>
          </div>

          {/* Run button */}
          <div className="compiler-run-bar">
            <button
              className={`compiler-run-btn ${running ? "compiler-run-btn--running" : ""}`}
              onClick={handleRun}
              disabled={running}
            >
              {running ? (
                <>
                  <span className="compiler-spinner" aria-hidden="true" />
                  Compiling…
                </>
              ) : (
                <>▶ Run Code</>
              )}
            </button>

            <span className="compiler-run-bar__hint">
              {running
                ? "Executing…"
                : hasRun
                ? "✅ Execution complete"
                : "Press ▶ Run Code to execute"}
            </span>
          </div>

          {/* Output lines */}
          <div className="compiler-output" ref={outputRef}>
            {safeOutput.length === 0 && !running && (
              <div className="compiler-output__empty">
                <span className="compiler-output__empty-icon">⚡</span>
                <p>Output will appear here after execution.</p>
              </div>
            )}

            {safeOutput.map((line, i) => {
              const type = line?.type ?? "info";
              const text = line?.text ?? "";

              return (
                <div
                  key={i}
                  className={`compiler-output__line compiler-output__line--${type}`}
                  style={{ fontSize: `${fontSize - 1}px` }}
                >
                  {type !== "blank" && (
                    <span className="compiler-output__prompt" aria-hidden="true">
                      {type === "success" ? "✔" : type === "info" ? "ℹ" : ">"}
                    </span>
                  )}
                  <span>{text}</span>
                </div>
              );
            })}

            {running && (
              <div className="compiler-output__line compiler-output__line--running">
                <span className="compiler-output__cursor" aria-hidden="true">▌</span>
              </div>
            )}
          </div>

          {/* Console status bar */}
          <div className="compiler-statusbar">
            <span className={`compiler-status-dot compiler-status-dot--${hasRun ? "success" : running ? "running" : "idle"}`} />
            <span>{hasRun ? "Ready" : running ? "Running" : "Idle"}</span>
            <span>{safeOutput.filter((l) => l.type === "log" || l.type === "success").length} lines</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Compiler;