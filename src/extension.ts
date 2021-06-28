// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
    const activated = await activateDidactExtension();
    if (!activated) {
        return;
    }

    await vscode.commands.executeCommand('workbench.action.closeAllEditors');
    const tutorialUri = vscode.Uri.file(path.join(__filename, '..', '..') + "/README.md");
    await vscode.commands.executeCommand('vscode.didact.startDidact', tutorialUri);
}

// this method is called when your extension is deactivated
export function deactivate() { }

// This method activates the didact extension
async function activateDidactExtension(): Promise<boolean> {
    const extensions = vscode.extensions.all;
    const didactExt = extensions.find(ext => ext.id === 'redhat.vscode-didact');
    if (didactExt) {
        await didactExt?.activate();
        return true;
    }
    return false;
}