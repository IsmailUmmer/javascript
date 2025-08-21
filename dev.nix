nix
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  # Additional shell options
  shellHook = ''
    # set environment variables, etc.
  '';

  # List of packages to include in the development environment
  packages = [
    # other packages you might have
    pkgs.openssh
  ];
}