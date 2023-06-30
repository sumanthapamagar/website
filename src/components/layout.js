import * as React from "react";
function Layout({ children }) {
    return (
        <main className="w-screen h-screen overflow-auto p-2 md:p-8 lg-p-12  bg-gradient-to-r from-zinc-900  via-gray-900 to-slate-900 text-white font-light">
            {children}
        </main>
    );
}

export default Layout;
