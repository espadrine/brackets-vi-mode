//global define, brackets, CodeMirror

define(function (require, exports, module) {
    "use strict";
    
    var CommandManager = brackets.getModule("command/CommandManager"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        Menus = brackets.getModule("command/Menus");
    
    require("thirdparty/CodeMirror2/keymap/vim.js");
    
    function toggleViMode() {
        var editor = EditorManager.getCurrentFullEditor();
        if (editor._codeMirror.getOption("keyMap") === "default") {
            editor._codeMirror.setOption("keyMap", "vim");
        } else {
            editor._codeMirror.setOption("keyMap", "default");
        }
    }
    
    var VI_MODE = "vi";
    CommandManager.register("Enter / Exit Vi Mode", VI_MODE, toggleViMode);
    
    var menu = Menus.getMenu(Menus.AppMenuBar.EDIT_MENU);
    menu.addMenuItem(VI_MODE);
});