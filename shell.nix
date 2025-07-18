{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # Node.js LTS version
    nodejs_20

    # Package manager
    nodePackages.npm

    # Development tools
    nodePackages.typescript
    nodePackages.typescript-language-server
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin:$PATH"

    # Ensure npm uses the correct prefix
    npm config set prefix "$PWD/.npm-global"
    export PATH="$PWD/.npm-global/bin:$PATH"

    echo "Node.js development environment loaded"
    echo "Node version: $(node --version)"
    echo "NPM version: $(npm --version)"
  '';
}