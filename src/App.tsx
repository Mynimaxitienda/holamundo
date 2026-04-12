/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center p-5 shadow-lg rounded-4 bg-white"
        style={{ maxWidth: '600px' }}
      >
        <h1 className="display-1 fw-bold text-primary mb-3">Hola Mundo</h1>
        <p className="lead text-secondary">
          Esta es una aplicación React + TypeScript + Bootstrap 5 lista para GitHub Pages.
        </p>
        <hr className="my-4" />
        <div className="d-flex gap-2 justify-content-center flex-wrap">
          <span className="badge rounded-pill bg-info text-dark px-3 py-2">React</span>
          <span className="badge rounded-pill bg-primary px-3 py-2">TypeScript</span>
          <span className="badge rounded-pill bg-dark px-3 py-2">Bootstrap 5</span>
          <span className="badge rounded-pill bg-success px-3 py-2">GitHub Pages</span>
        </div>
      </motion.div>
    </div>
  );
}
