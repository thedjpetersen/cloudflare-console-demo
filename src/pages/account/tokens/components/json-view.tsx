import Editor from "@monaco-editor/react";

interface JsonViewProps {
  jsonConfig: string;
  onJsonChange: (newJson: string) => void;
}

export function JsonView({ jsonConfig, onJsonChange }: JsonViewProps) {
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      onJsonChange(value);
    }
  };

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Token Configuration JSON</h3>
      <p className="text-sm text-gray-600">
        Edit the JSON configuration directly. Changes will be reflected in the
        form view.
      </p>
      <div className="border rounded-md">
        <Editor
          height="600px"
          defaultLanguage="json"
          value={jsonConfig}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            formatOnPaste: true,
            formatOnType: true,
            scrollBeyondLastLine: false,
            wordWrap: "on",
            wrappingIndent: "indent",
            automaticLayout: true,
            tabSize: 2,
            lineNumbers: "on",
            renderLineHighlight: "all",
            scrollbar: {
              vertical: "visible",
              horizontal: "visible",
            },
          }}
          theme="vs-light"
        />
      </div>
    </div>
  );
}
