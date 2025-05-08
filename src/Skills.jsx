import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Container';
import SkillCont from './components/Skillset/SkillCont';

function Project() {
    return (
        <div className='bg-gradient-to-r from-gray-400 to-cyan-300 min-h-screen overflow-hidden pb-7'>
            <Navbar />
            <div className='flex'>
                <div className='hidden md:block'>
                    <Sidebar />
                </div>
                <div className='flex-grow flex items-center justify-center pt-12'>
                    <SkillCont />
                </div>
            </div>
        </div>
    );
}

export default Project;
