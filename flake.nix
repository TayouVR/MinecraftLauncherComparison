{
  description = "Beyond Squared HID Interface";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {
          inherit system;
        };
      in {
        devShells.default = pkgs.mkShell rec {
          nativeBuildInputs = with pkgs; [
            nodejs
#            nodePackages.json5
#            nodePackages.astro
          ];

          LD_LIBRARY_PATH = pkgs.lib.makeLibraryPath nativeBuildInputs;
        };
      }
    );
}
