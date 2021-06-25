// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
	const tutorialPath = path.resolve(context.extensionPath, './nodejs-express-didact.md');
	const tutorialUri = vscode.Uri.file(tutorialPath);
	console.log(tutorialUri);

	await vscode.commands.executeCommand('vscode.didact.startDidact', tutorialUri);
}

// this method is called when your extension is deactivated
export function deactivate() { }