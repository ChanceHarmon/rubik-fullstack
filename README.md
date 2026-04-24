# Rubik Fullstack

A modern full-stack Rubik’s Cube simulator built with React, Express, and Node.js.

## Overview

This project simulates a 3x3 Rubik’s Cube with a complete rotation engine implemented from scratch.

Users can:
- Rotate any face (clockwise or counterclockwise)
- Chain moves together
- Reset the cube to a solved state

All moves are validated against a physical cube to ensure correctness.

## Tech Stack

Frontend:
- React (Vite)

Backend:
- Node.js
- Express

## Current Features

- Full cube rotation engine (all 6 faces)
- Accurate edge and face transformations
- Stateful backend (in-memory)
- Interactive UI with move controls

## Architecture Highlights

- Cube state represented as a single object
- Pure transformation functions (`applyMove`)
- Reusable edge cycling system (`cycleEdges`)
- No duplicated per-face logic

## Example Cube State

```json
{
  "white": ["w","w","w","w","w","w","w","w","w"],
  "yellow": ["y","y","y","y","y","y","y","y","y"],
  ...
}
```

## Running Locally

Clone the repository, and then:  
Client:  
- cd client  
- npm install  
- npm run dev  

Server:  
- cd server  
- npm install  
- npm run dev  

## Roadmap

- Persist cube state with Postgres (JSONB)
- Improve UI layout and controls
- Add scramble and move history
- Optional: 3D visualization

## Notes

This project is a complete rebuild of an earlier version with a focus on:
- cleaner architecture
- reusable logic
- modern full-stack practices