import React, { useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import DashboardTab from "./tabs/DashboardTab";
import DashboardContent from "./../../components/dashboard/DashboardContent";
import AddBlogTab from "./tabs/AddBlogTab";
import AllBlogsTab from "./tabs/AllBlogsTab";
import MediaLibraryTab from "./tabs/MediaLibraryTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const renderTab = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardContent />;
      case "Add New Blog":
        return <AddBlogTab />;
      case "All Blogs":
        return <AllBlogsTab />;
      case "Media Library":
        return <MediaLibraryTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <DashboardLayout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderTab()}
    </DashboardLayout>
  );
};

export default Dashboard;
