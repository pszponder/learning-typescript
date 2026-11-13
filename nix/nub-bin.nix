{
  lib,
  stdenv,
  fetchurl,
  autoPatchelfHook,
  makeWrapper,
}:

stdenv.mkDerivation {
  pname = "nub-bin";
  version = "0.11.0";

  src = fetchurl {
    url = "https://github.com/nubjs/nub/releases/download/v0.11.0/nub-linux-x64.tar.gz";
    sha256 = "40d72603442885efc06d26ae0a5dbc114e2c8f7101d4dd332730d5ec14dc0c89";
  };

  sourceRoot = ".";
  nativeBuildInputs = [ autoPatchelfHook makeWrapper ];
  buildInputs = [ stdenv.cc.cc.lib ];
  dontBuild = true;

  installPhase = ''
    runHook preInstall
    mkdir -p "$out/bin" "$out/libexec"
    install -m755 bin/nub "$out/libexec/nub"
    runHook postInstall
  '';

  # The embedded native addon is extracted at runtime, beyond autoPatchelf's reach.
  postFixup = ''
    for command in nub nubx nubr; do
      makeWrapper "$out/libexec/nub" "$out/bin/$command" \
        --argv0 "$command" \
        --prefix LD_LIBRARY_PATH : "${lib.makeLibraryPath [ stdenv.cc.cc.lib ]}"
    done
  '';

  meta = {
    description = "Nub toolkit, packaged from the upstream release binary";
    homepage = "https://github.com/nubjs/nub";
    license = lib.licenses.mit;
    mainProgram = "nub";
    platforms = [ "x86_64-linux" ];
  };
}
