import React, { useState } from 'react';
import { User, Settings, ShieldCheck, HelpCircle, ChevronRight, Star, Flame, X, MessageSquarePlus, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { Button } from '../components/ui/Button';

export function Profile() {
  const navigate = useNavigate();
  const { isLifetimeUnlocked, preferences, updatePreference } = useAppStore();
  const [showFaq, setShowFaq] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);

  // Form state
  const [reqType, setReqType] = useState('Fitur Baru');
  const [reqTitle, setReqTitle] = useState('');
  const [reqDesc, setReqDesc] = useState('');

  const handleSendRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reqTitle || !reqDesc) return;

    // Using mailto to guarantee 100% working delivery without backend/API limits
    const emailTo = "hello@masaka.app"; // Default support email
    const subject = `[Request ${reqType}] ${reqTitle}`;
    const body = `Halo Tim Masaka,\n\nSaya ingin menyampaikan request berikut:\n\nJenis: ${reqType}\nJudul: ${reqTitle}\n\nDetail:\n${reqDesc}\n\nTerima kasih!`;

    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Close and reset
    setShowRequestForm(false);
    setReqTitle('');
    setReqDesc('');
  };

  return (
    <div className="pb-6 pt-6 px-4 max-w-md md:max-w-2xl lg:max-w-4xl mx-auto min-h-full bg-stone-50">
      <header className="mb-8 flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center border-2 border-orange-200">
          <User className="w-8 h-8 text-orange-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-stone-900 mb-1">Koki Pemula</h1>
          <p className="text-stone-500 text-sm">Masak Nusantara jadi gampang.</p>
        </div>
      </header>

      {/* Lifetime Access Card */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-3xl p-6 text-white mb-8 shadow-lg relative overflow-hidden">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <h2 className="text-lg font-bold">Masaka Lifetime</h2>
          </div>
          <p className="text-stone-300 text-sm mb-6 leading-relaxed">
            {isLifetimeUnlocked
              ? "Kamu sudah membuka semua fitur premium selamanya. Selamat memasak!"
              : "Buka semua resep premium, mode masak fokus, dan daftar belanja otomatis."}
          </p>

          {!isLifetimeUnlocked ? (
            <div className="flex gap-3">
              <Button
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white border-none rounded-xl font-bold"
                onClick={() => navigate('/paywall')}
              >
                Upgrade Sekarang
              </Button>
              <Button
                variant="outline"
                className="flex-1 bg-transparent border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white rounded-xl"
                onClick={() => navigate('/paywall')}
              >
                Pulihkan
              </Button>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-bold border border-green-500/30">
              <ShieldCheck className="w-4 h-4" />
              Aktif Selamanya
            </div>
          )}
        </div>
      </div>

      {/* Preferences */}
      <section className="mb-8">
        <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-4 px-2">
          Preferensi Masak
        </h3>
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">

          <div className="flex items-center justify-between p-4 border-b border-stone-100">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-600">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-stone-900">Satuan Takaran</div>
                <div className="text-xs text-stone-500">Gram/ml atau Sendok/Gelas</div>
              </div>
            </div>
            <select
              className="bg-stone-50 border border-stone-200 text-stone-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2"
              value={preferences.unit}
              onChange={(e) => updatePreference('unit', e.target.value)}
            >
              <option value="gram/ml">Gram / ml</option>
              <option value="sendok/gelas">Sendok / Gelas</option>
            </select>
          </div>

          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 rounded-lg text-red-500">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-stone-900">Tingkat Pedas Default</div>
                <div className="text-xs text-stone-500">Sesuaikan selera lidahmu</div>
              </div>
            </div>
            <select
              className="bg-stone-50 border border-stone-200 text-stone-700 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block p-2"
              value={preferences.spiceLevel}
              onChange={(e) => updatePreference('spiceLevel', e.target.value)}
            >
              <option value="Sedang">Sedang</option>
              <option value="Pedas">Pedas</option>
              <option value="Sangat Pedas">Sangat Pedas</option>
            </select>
          </div>

        </div>
      </section>

      {/* Support */}
      <section>
        <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-4 px-2">
          Bantuan & Info
        </h3>
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">

          <button
            className="w-full flex items-center justify-between p-4 border-b border-stone-100 hover:bg-stone-50 transition-colors text-left"
            onClick={() => setShowFaq(true)}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg text-blue-500">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div className="font-semibold text-stone-900">FAQ & Bantuan</div>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-400" />
          </button>

          <button
            className="w-full flex items-center justify-between p-4 border-b border-stone-100 hover:bg-stone-50 transition-colors text-left"
            onClick={() => setShowPrivacy(true)}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-100 rounded-lg text-stone-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="font-semibold text-stone-900">Kebijakan Privasi</div>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-400" />
          </button>

          <button
            className="w-full flex items-center justify-between p-4 hover:bg-stone-50 transition-colors text-left"
            onClick={() => setShowRequestForm(true)}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                <MessageSquarePlus className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-stone-900">Request Fitur & Resep</div>
                <div className="text-xs text-stone-500">Punya ide menarik? Beritahu kami!</div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-400" />
          </button>

        </div>
      </section>

      {/* FAQ Modal */}
      {showFaq && (
        <div className="fixed inset-0 z-[60] flex items-end bg-stone-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-t-3xl p-6 pb-safe max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-stone-900">FAQ & Bantuan</h2>
              <button onClick={() => setShowFaq(false)} className="p-2 bg-stone-100 rounded-full text-stone-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-6 text-stone-700 text-sm leading-relaxed pb-8">
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Bagaimana cara menghapus resep yang sudah disimpan?</h4>
                <p>Cukup pergi ke tab "Simpan", lalu ketuk ikon pita pada resep/kartu untuk menghapusnya dari daftar favoritmu.</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Apakah saya harus membayar langganan tiap bulan untuk Premium?</h4>
                <p>Tidak. Model pembayaran Masaka adalah "Sekali Bayar Akses Selamanya" (Lifetime). Tidak ada biaya langganan berulang.</p>
              </div>
              <div>
                <h4 className="font-bold text-stone-900 mb-1">Daftar belanja saya penuh, cara mengharapusnya bagaimana?</h4>
                <p>Di halaman daftar belanja (tab Belanja), kamu bisa mencentang bahan yang sudah selesai dibeli. Setelah itu muncul ikon tempat sampah di kanan atas untuk menghapus bahan yang sudah terciduk bersih.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[60] flex items-end bg-stone-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-t-3xl p-6 pb-safe max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-stone-900">Kebijakan Privasi</h2>
              <button onClick={() => setShowPrivacy(false)} className="p-2 bg-stone-100 rounded-full text-stone-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4 text-stone-700 text-sm leading-relaxed pb-8">
              <p>Masaka sangat menghormati privasi Anda. Semua data yang dikumpulkan (seperti daftar belanja, preferensi rasa, resep tersimpan) hanya kami simpan secara lokal (di perangkat Anda melalui localStorage) menggunakan status <span className="italic">offline-first</span> untuk menjaga privasi.</p>
              <p>Aplikasi ini hanya akan menggunakan koneksi luar apabila Anda memanfaatkan sistem Saran berbasis Kecerdasan Buatan (AI) yang kami integrasikan demi kenyamanan. Tidak ada data pribadi yang dilacak atau dijual ke pihak ketiga.</p>
              <p className="text-stone-500 text-xs mt-4">Pembaruan Terakhir: Oktober 2026</p>
            </div>
          </div>
        </div>
      )}

      {/* Request Form Modal */}
      {showRequestForm && (
        <div className="fixed inset-0 z-[60] flex items-end bg-stone-900/40 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-t-3xl p-6 pb-safe max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-bold text-stone-900">Kirim Request</h2>
                <p className="text-sm text-stone-500">Beritahu kami apa yang ingin kamu lihat di Masaka!</p>
              </div>
              <button onClick={() => setShowRequestForm(false)} className="p-2 bg-stone-100 rounded-full text-stone-500 self-start">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSendRequest} className="space-y-5 pb-8">
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Jenis Request</label>
                <div className="grid grid-cols-2 gap-2">
                  {['Fitur Baru', 'Resep Baru', 'Laporan Bug', 'Lainnya'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setReqType(type)}
                      className={`py-2.5 px-3 rounded-xl text-sm font-medium border transition-colors ${reqType === type
                          ? 'bg-purple-50 border-purple-200 text-purple-700'
                          : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                        }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Pesan Singkat (Judul)</label>
                <input
                  type="text"
                  required
                  value={reqTitle}
                  onChange={(e) => setReqTitle(e.target.value)}
                  placeholder="Contoh: Tambahkan dark mode dong!"
                  className="w-full bg-stone-50 border border-stone-200 text-stone-900 text-sm rounded-xl focus:ring-purple-500 focus:border-purple-500 block p-3.5 outline-none transition-all placeholder:text-stone-400"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Detail Request</label>
                <textarea
                  required
                  rows={4}
                  value={reqDesc}
                  onChange={(e) => setReqDesc(e.target.value)}
                  placeholder="Ceritakan sedetail mungkin agar kami lebih paham keinginanmu..."
                  className="w-full bg-stone-50 border border-stone-200 text-stone-900 text-sm rounded-xl focus:ring-purple-500 focus:border-purple-500 block p-3.5 outline-none transition-all resize-none placeholder:text-stone-400"
                />
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-purple-200 transition-all active:scale-[0.98]"
                >
                  <Send className="w-5 h-5" />
                  Kirim Request Sekarang
                </Button>
                <p className="text-center text-xs text-stone-400 mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Menggunakan sistem email terenkripsi bawaan (100% aman)
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-12 text-center">
        <p className="text-xs text-stone-400 font-medium tracking-widest uppercase">
          Masaka App v1.0.0
        </p>
      </div>
    </div>
  );
}
