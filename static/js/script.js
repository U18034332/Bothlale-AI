var editor = CodeMirror.fromTextArea(document.getElementById("code-editor"), {
    lineNumbers: true,
    mode: "python",
    matchBrackets: true,
    autoCloseBrackets: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    extraKeys: {
        "Ctrl-Space": "autocomplete",
        "Ctrl-Q": function(cm) {
            cm.foldCode(cm.getCursor());
        },
        "Ctrl-F": "findPersistent",
        "Ctrl-H": "replace"
    },
    lint: true,
    styleActiveLine: true,
    placeholder: "Write your Python code here",
});