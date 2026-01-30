#!/bin/bash
# Hostinger build script
npm install
npm run build
cp -r dist/* ./