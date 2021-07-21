import * as vscode from "vscode";
import statusCodes from "./statusCodes";

export function activate(context: vscode.ExtensionContext) {
    console.log(
        'Congratulations, your extension "http-status-codes" is now active!'
    );

    context.subscriptions.push(
        vscode.languages.registerHoverProvider("*", {
            provideHover(document) {
                // @ts-ignore
                const number = document.getText().match(/\d+/)[0];
                if (number) {
                    const statusCode = Object.keys(statusCodes).find(
                        (key) => key === number
                    );
                    if (!statusCode) return;

                    const statusCodeInfo = statusCodes[Number(statusCode)];

                    const markdown = new vscode.MarkdownString();
                    markdown.isTrusted = true;

                    markdown.appendMarkdown(
                        `**${statusCodeInfo.title}**
                         ${statusCodeInfo.content}.
                         [More Info](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${statusCode})`
                    );

                    return new vscode.Hover(markdown);
                } else return;
            }
        })
    );

    context.subscriptions.push(
        vscode.commands.registerCommand(
            "http-status-codes.search",
            async () => {
                const codes = Object.values(statusCodes);
                const code = await vscode.window.showQuickPick(
                    codes.map((c) => c.title)
                );

                if (!code) return;

                vscode.env.openExternal(
                    vscode.Uri.parse(
                        `https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${Object.keys(
                            statusCodes
                        ).find(
                            (key) => statusCodes[Number(key)].title === code
                        )}`
                    )
                );
            }
        )
    );
}

export function deactivate() {}
