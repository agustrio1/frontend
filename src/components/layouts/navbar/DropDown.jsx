import Link from 'next/link';
import { useState } from 'react';

function DropDown() {
    const [subMenu, setSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setSubMenu(!subMenu);
    };

    return (
        <div className="realtive group">
            <button onClick={toggleSubMenu} className="block p-2 text-black">
                Pengaturan
            </button>
            {subMenu && (
                <div className="absolute right-0 bg-white shadow-md p-2 space-y-2 w-48 border-t-2">
                    <div className="flex flex-col">
                        <Link href="/setting/app" className="flex mb-2 text-black">
                            Pengaturan Aplikasi
                        </Link>
                        <Link href="/setting/users" className="flex mb-2 text-black">
                            Pengaturan Pengguna
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}

export default DropDown;
