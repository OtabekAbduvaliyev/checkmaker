"use client";
import { useState } from 'react';
import html2canvas from 'html2canvas';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    licenseNumber: Math.random().toString(36).substring(2, 10).toUpperCase()
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const downloadLicense = async () => {
    const license = document.getElementById('license');
    const canvas = await html2canvas(license);
    const a = document.createElement('a');
    a.href = canvas.toDataURL('image/jpeg');
    a.download = `license-${formData.name}.jpg`;
    a.click();
  };

  return (
    <div className="container mx-auto p-4 bg-zinc-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-zinc-900">Check Yaratish</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-xl mb-6 font-semibold text-zinc-800">Ma'lumotlarni kiriting</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To'liq ism</label>
              <input
                type="text"
                name="name"
                placeholder="Ism familiyangiz"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefon raqam</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+998 XX XXX XX XX"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="button"
              onClick={downloadLicense}
              className="w-full bg-black text-white p-3 rounded-lg hover:bg-zinc-800 transition duration-300 font-medium"
            >
              Checkni yuklash
            </button>
          </form>
        </div>

        <div id="license" className="p-8 bg-black rounded-lg shadow-2xl">
          <div className="bg-white p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-3xl font-bold text-black">IjaraX</div>
                <div className="text-sm text-zinc-500">Platforma</div>
              </div>
              <div className="bg-zinc-100 px-3 py-1 rounded-full border border-zinc-200">
                <div className="text-sm text-zinc-800 font-mono">{formData.licenseNumber}</div>
              </div>
            </div>
            
            <div className="space-y-4 mt-8">
              <div className="border-b pb-2">
                <div className="text-sm text-zinc-600">Check egasi</div>
                <div className="text-lg font-semibold">{formData.name || 'Ism kiritilmagan'}</div>
              </div>
              
              <div className="border-b pb-2">
                <div className="text-sm text-zinc-600">Aloqa raqami</div>
                <div className="text-lg font-semibold">{formData.phoneNumber || 'Raqam kiritilmagan'}</div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-sm text-zinc-600">IjaraX tomonidan tasdiqlangan</div>
                  <div className="text-xs text-zinc-400">Rasmiy check</div>
                </div>
                <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center">
                  <span className="text-white text-sm font-bold">IjaraX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
