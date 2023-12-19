window.editor_python = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    lineNumbers: true,
    mode: "python",
    theme: "monokai",
    matchBrackets: true,
    autoCloseBrackets: true,
    smartIndent: true,
    lint: true,
    fullScreen: false,
    extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }},
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    styleActiveLine: true,
    placeholder: "Write your Python code here",
});


