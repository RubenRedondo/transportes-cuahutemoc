#!/bin/bash

if [ -z "$1" ]; then
  echo "Por favor, proporciona un nombre para el componente."
  exit 1
fi

inputPath=$1
baseDir="sections"

# Verificar si el nombre comienza con "components/"
if [[ $inputPath == components/* ]]; then
  baseDir="components"
  inputPath=${inputPath#components/}
fi

# Extraer el nombre del componente sin la ruta de la carpeta
componentName=$(basename "$inputPath")

# Crear el directorio si incluye subcarpetas
directory="$baseDir/$(dirname "$inputPath")"

# Convertir el primer carácter a mayúscula y manejar subdirectorios
componentNameCapitalized="$(tr '[:lower:]' '[:upper:]' <<< ${componentName:0:1})${componentName:1}"

fullDirectory="$directory/$componentNameCapitalized"

# Crear directorio, incluyendo subdirectorios si es necesario
mkdir -p "$fullDirectory"

# Crear archivo jsx
cat <<EOF >"$fullDirectory/${componentName}.jsx"
import {${componentNameCapitalized}Container} from "./${componentName}.styled.js";

const ${componentNameCapitalized} = () => {
    return (
        <${componentNameCapitalized}Container>

        </${componentNameCapitalized}Container>
    )
};

export default ${componentNameCapitalized};
EOF

# Crear archivo styled.js
cat <<EOF >"$fullDirectory/${componentName}.styled.js"
import styled from "styled-components";

export const ${componentNameCapitalized}Container = styled.div\`
  border: 1px solid lightcoral;
\`;
EOF

echo "Componente '${componentNameCapitalized}' creado en '$fullDirectory'"
