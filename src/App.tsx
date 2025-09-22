import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { UserTypeSelector } from './components/UserTypeSelector';
import { CooperationPaths } from './components/CooperationPaths';
import { ReverseCooperation } from './components/ReverseCooperation';
import { WorkShowcase } from './components/WorkShowcase';
import { LicenseSection } from './components/LicenseSection';
import { ShareSection } from './components/ShareSection';
import { Footer } from './components/Footer';

export type UserType = 'researcher' | 'developer' | 'creative' | 'lazy' | 'interested' | 'any';

function App() {
  const [selectedUserType, setSelectedUserType] = useState<UserType>('any');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <UserTypeSelector 
        selectedType={selectedUserType} 
        onTypeSelect={setSelectedUserType} 
      />
      <CooperationPaths userType={selectedUserType} />
      <ReverseCooperation />
      <WorkShowcase />
      <LicenseSection />
      <ShareSection />
      <Footer />
    </div>
  );
}

export default App;