let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) conn.sendBut(m.chat, `_*Tidak ada absen berlangsung digrup ini!*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen`, wm, 'Mulai Absen', '.mulaiabsen', m)
    delete conn.absen[id]
    m.reply(`Berhasil Menghapus Absen Saat Ini`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
module.exports = handler
