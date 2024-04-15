import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MAIN_ROUTE, NEWS_ROUTE } from "../utils/consts";
import { publicRoutes } from "../routes";

const AppRouter = () => {

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={Component} />
      ))}
      <Route path="*" element={<Navigate to={MAIN_ROUTE} replace />} />
    </Routes>
  );
};

export default AppRouter;