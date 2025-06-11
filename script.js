// ウクレレコード進行データベース
const chordProgressions = {
    'C': {
        verse: [
            { name: 'カノン進行', chords: ['C', 'G', 'Am', 'F'] },
            { name: '王道進行', chords: ['C', 'G', 'Am', 'Em'] },
            { name: 'Let It Be進行', chords: ['C', 'Am', 'F', 'G'] },
            { name: 'スタンドバイミー', chords: ['C', 'Am', 'F', 'G'] },
            { name: '小室進行', chords: ['Am', 'F', 'G', 'C'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['Dm', 'G', 'C', 'C'] },
            { name: 'サブドミナント', chords: ['F', 'G', 'Am', 'Am'] },
            { name: 'セカンダリー', chords: ['Am', 'D', 'F', 'G'] },
            { name: 'クリシェ', chords: ['C', 'C/B', 'Am', 'F'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['C', 'Am', 'Dm', 'G'] },
            { name: 'ビートルズ進行', chords: ['C', 'F', 'G', 'Am'] },
            { name: 'J-POP王道', chords: ['F', 'G', 'Em', 'Am'] },
            { name: 'アニソン進行', chords: ['F', 'G', 'C', 'Am'] },
            { name: 'ジャズ風', chords: ['Cmaj7', 'Am7', 'Dm7', 'G7'] },
            { name: 'サスペンス', chords: ['Csus4', 'C', 'Fsus2', 'F'] }
        ]
    },
    'C#': {
        verse: [
            { name: 'カノン進行', chords: ['C#', 'G#', 'A#m', 'F#'] },
            { name: '王道進行', chords: ['C#', 'G#', 'A#m', 'Fm'] },
            { name: 'Let It Be進行', chords: ['C#', 'A#m', 'F#', 'G#'] },
            { name: 'フォーク進行', chords: ['C#', 'A#m', 'F#', 'G#'] },
            { name: '小室進行', chords: ['A#m', 'F#', 'G#', 'C#'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['D#m', 'G#', 'C#', 'C#'] },
            { name: 'サブドミナント', chords: ['F#', 'G#', 'A#m', 'A#m'] },
            { name: 'セカンダリー', chords: ['A#m', 'D#', 'F#', 'G#'] },
            { name: 'クリシェ', chords: ['C#', 'C', 'A#m', 'F#'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['C#', 'A#m', 'D#m', 'G#'] },
            { name: 'ビートルズ進行', chords: ['C#', 'F#', 'G#', 'A#m'] },
            { name: 'J-POP王道', chords: ['F#', 'G#', 'Fm', 'A#m'] },
            { name: 'アニソン進行', chords: ['F#', 'G#', 'C#', 'A#m'] },
            { name: 'ロック進行', chords: ['C#', 'G#', 'F#', 'F#'] }
        ]
    },
    'D': {
        verse: [
            { name: 'カノン進行', chords: ['D', 'A', 'Bm', 'G'] },
            { name: '王道進行', chords: ['D', 'A', 'Bm', 'F#m'] },
            { name: 'フォーク進行', chords: ['D', 'Bm', 'G', 'A'] },
            { name: 'ブルース進行', chords: ['D', 'G', 'A', 'D'] },
            { name: '小室進行', chords: ['Bm', 'G', 'A', 'D'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['Em', 'A', 'D', 'D'] },
            { name: 'サブドミナント', chords: ['G', 'A', 'Bm', 'Bm'] },
            { name: 'セカンダリー', chords: ['Bm', 'E', 'G', 'A'] },
            { name: 'クリシェ', chords: ['D', 'D/C#', 'Bm', 'G'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['D', 'Bm', 'Em', 'A'] },
            { name: 'ビートルズ進行', chords: ['D', 'G', 'A', 'Bm'] },
            { name: 'J-POP王道', chords: ['G', 'A', 'F#m', 'Bm'] },
            { name: 'アニソン進行', chords: ['G', 'A', 'D', 'Bm'] },
            { name: 'ロック進行', chords: ['D', 'A', 'G', 'G'] }
        ]
    },
    'D#': {
        verse: [
            { name: 'カノン進行', chords: ['D#', 'A#', 'Cm', 'G#'] },
            { name: '王道進行', chords: ['D#', 'A#', 'Cm', 'Gm'] },
            { name: 'フォーク進行', chords: ['D#', 'Cm', 'G#', 'A#'] },
            { name: 'ブルース進行', chords: ['D#', 'G#', 'A#', 'D#'] },
            { name: '小室進行', chords: ['Cm', 'G#', 'A#', 'D#'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['Fm', 'A#', 'D#', 'D#'] },
            { name: 'サブドミナント', chords: ['G#', 'A#', 'Cm', 'Cm'] },
            { name: 'セカンダリー', chords: ['Cm', 'F', 'G#', 'A#'] },
            { name: 'クリシェ', chords: ['D#', 'D', 'Cm', 'G#'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['D#', 'Cm', 'Fm', 'A#'] },
            { name: 'ビートルズ進行', chords: ['D#', 'G#', 'A#', 'Cm'] },
            { name: 'J-POP王道', chords: ['G#', 'A#', 'Gm', 'Cm'] },
            { name: 'アニソン進行', chords: ['G#', 'A#', 'D#', 'Cm'] },
            { name: 'ロック進行', chords: ['D#', 'A#', 'G#', 'G#'] }
        ]
    },
    'E': {
        verse: [
            { name: 'カノン進行', chords: ['E', 'B', 'C#m', 'A'] },
            { name: '王道進行', chords: ['E', 'B', 'C#m', 'G#m'] },
            { name: 'フォーク進行', chords: ['E', 'C#m', 'A', 'B'] },
            { name: 'ブルース進行', chords: ['E', 'A', 'B', 'E'] },
            { name: '小室進行', chords: ['C#m', 'A', 'B', 'E'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['F#m', 'B', 'E', 'E'] },
            { name: 'サブドミナント', chords: ['A', 'B', 'C#m', 'C#m'] },
            { name: 'セカンダリー', chords: ['C#m', 'F#', 'A', 'B'] },
            { name: 'クリシェ', chords: ['E', 'D#', 'C#m', 'A'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['E', 'C#m', 'F#m', 'B'] },
            { name: 'ビートルズ進行', chords: ['E', 'A', 'B', 'C#m'] },
            { name: 'J-POP王道', chords: ['A', 'B', 'G#m', 'C#m'] },
            { name: 'アニソン進行', chords: ['A', 'B', 'E', 'C#m'] },
            { name: 'ロック進行', chords: ['E', 'B', 'A', 'A'] }
        ]
    },
    'F': {
        verse: [
            { name: 'カノン進行', chords: ['F', 'C', 'Dm', 'A#'] },
            { name: '王道進行', chords: ['F', 'C', 'Dm', 'Am'] },
            { name: 'フォーク進行', chords: ['F', 'Dm', 'A#', 'C'] },
            { name: 'ブルース進行', chords: ['F', 'A#', 'C', 'F'] },
            { name: '小室進行', chords: ['Dm', 'A#', 'C', 'F'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['Gm', 'C', 'F', 'F'] },
            { name: 'サブドミナント', chords: ['A#', 'C', 'Dm', 'Dm'] },
            { name: 'セカンダリー', chords: ['Dm', 'G', 'A#', 'C'] },
            { name: 'クリシェ', chords: ['F', 'F/E', 'Dm', 'A#'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['F', 'Dm', 'Gm', 'C'] },
            { name: 'ビートルズ進行', chords: ['F', 'A#', 'C', 'Dm'] },
            { name: 'J-POP王道', chords: ['A#', 'C', 'Am', 'Dm'] },
            { name: 'アニソン進行', chords: ['A#', 'C', 'F', 'Dm'] },
            { name: 'ロック進行', chords: ['F', 'C', 'A#', 'A#'] }
        ]
    },
    'F#': {
        verse: [
            { name: 'カノン進行', chords: ['F#', 'C#', 'D#m', 'B'] },
            { name: '王道進行', chords: ['F#', 'C#', 'D#m', 'A#m'] },
            { name: 'フォーク進行', chords: ['F#', 'D#m', 'B', 'C#'] },
            { name: 'ブルース進行', chords: ['F#', 'B', 'C#', 'F#'] },
            { name: '小室進行', chords: ['D#m', 'B', 'C#', 'F#'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['G#m', 'C#', 'F#', 'F#'] },
            { name: 'サブドミナント', chords: ['B', 'C#', 'D#m', 'D#m'] },
            { name: 'セカンダリー', chords: ['D#m', 'G#', 'B', 'C#'] },
            { name: 'クリシェ', chords: ['F#', 'F', 'D#m', 'B'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['F#', 'D#m', 'G#m', 'C#'] },
            { name: 'ビートルズ進行', chords: ['F#', 'B', 'C#', 'D#m'] },
            { name: 'J-POP王道', chords: ['B', 'C#', 'A#m', 'D#m'] },
            { name: 'アニソン進行', chords: ['B', 'C#', 'F#', 'D#m'] },
            { name: 'ロック進行', chords: ['F#', 'C#', 'B', 'B'] }
        ]
    },
    'G': {
        verse: [
            { name: 'カノン進行', chords: ['G', 'D', 'Em', 'C'] },
            { name: '王道進行', chords: ['G', 'D', 'Em', 'Bm'] },
            { name: 'Wonderwall', chords: ['G', 'D', 'C', 'C'] },
            { name: 'フォーク進行', chords: ['G', 'Em', 'C', 'D'] },
            { name: '小室進行', chords: ['Em', 'C', 'D', 'G'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['Am', 'D', 'G', 'G'] },
            { name: 'サブドミナント', chords: ['C', 'D', 'Em', 'Em'] },
            { name: 'セカンダリー', chords: ['Em', 'A', 'C', 'D'] },
            { name: 'クリシェ', chords: ['G', 'G/F#', 'Em', 'C'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['G', 'Em', 'Am', 'D'] },
            { name: 'ビートルズ進行', chords: ['G', 'C', 'D', 'Em'] },
            { name: 'J-POP王道', chords: ['C', 'D', 'Bm', 'Em'] },
            { name: 'アニソン進行', chords: ['C', 'D', 'G', 'Em'] },
            { name: 'ジャズ風', chords: ['Gmaj7', 'Em7', 'Am7', 'D7'] },
            { name: 'モダン', chords: ['Gadd9', 'Dsus4', 'Cadd9', 'Em7'] }
        ]
    },
    'G#': {
        verse: [
            { name: 'カノン進行', chords: ['G#', 'D#', 'Fm', 'C#'] },
            { name: '王道進行', chords: ['G#', 'D#', 'Fm', 'Cm'] },
            { name: 'フォーク進行', chords: ['G#', 'Fm', 'C#', 'D#'] },
            { name: 'ブルース進行', chords: ['G#', 'C#', 'D#', 'G#'] },
            { name: '小室進行', chords: ['Fm', 'C#', 'D#', 'G#'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['A#m', 'D#', 'G#', 'G#'] },
            { name: 'サブドミナント', chords: ['C#', 'D#', 'Fm', 'Fm'] },
            { name: 'セカンダリー', chords: ['Fm', 'A#', 'C#', 'D#'] },
            { name: 'クリシェ', chords: ['G#', 'G', 'Fm', 'C#'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['G#', 'Fm', 'A#m', 'D#'] },
            { name: 'ビートルズ進行', chords: ['G#', 'C#', 'D#', 'Fm'] },
            { name: 'J-POP王道', chords: ['C#', 'D#', 'Cm', 'Fm'] },
            { name: 'アニソン進行', chords: ['C#', 'D#', 'G#', 'Fm'] },
            { name: 'ロック進行', chords: ['G#', 'D#', 'C#', 'C#'] }
        ]
    },
    'A': {
        verse: [
            { name: 'カノン進行', chords: ['A', 'E', 'F#m', 'D'] },
            { name: '王道進行', chords: ['A', 'E', 'F#m', 'C#m'] },
            { name: 'フォーク進行', chords: ['A', 'F#m', 'D', 'E'] },
            { name: 'ブルース進行', chords: ['A', 'D', 'E', 'A'] },
            { name: '小室進行', chords: ['F#m', 'D', 'E', 'A'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['Bm', 'E', 'A', 'A'] },
            { name: 'サブドミナント', chords: ['D', 'E', 'F#m', 'F#m'] },
            { name: 'セカンダリー', chords: ['F#m', 'B', 'D', 'E'] },
            { name: 'クリシェ', chords: ['A', 'G#', 'F#m', 'D'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['A', 'F#m', 'Bm', 'E'] },
            { name: 'ビートルズ進行', chords: ['A', 'D', 'E', 'F#m'] },
            { name: 'J-POP王道', chords: ['D', 'E', 'C#m', 'F#m'] },
            { name: 'アニソン進行', chords: ['D', 'E', 'A', 'F#m'] },
            { name: 'ロック進行', chords: ['A', 'E', 'D', 'D'] }
        ]
    },
    'A#': {
        verse: [
            { name: 'カノン進行', chords: ['A#', 'F', 'Gm', 'D#'] },
            { name: '王道進行', chords: ['A#', 'F', 'Gm', 'Dm'] },
            { name: 'フォーク進行', chords: ['A#', 'Gm', 'D#', 'F'] },
            { name: 'ブルース進行', chords: ['A#', 'D#', 'F', 'A#'] },
            { name: '小室進行', chords: ['Gm', 'D#', 'F', 'A#'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['Cm', 'F', 'A#', 'A#'] },
            { name: 'サブドミナント', chords: ['D#', 'F', 'Gm', 'Gm'] },
            { name: 'セカンダリー', chords: ['Gm', 'C', 'D#', 'F'] },
            { name: 'クリシェ', chords: ['A#', 'A', 'Gm', 'D#'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['A#', 'Gm', 'Cm', 'F'] },
            { name: 'ビートルズ進行', chords: ['A#', 'D#', 'F', 'Gm'] },
            { name: 'J-POP王道', chords: ['D#', 'F', 'Dm', 'Gm'] },
            { name: 'アニソン進行', chords: ['D#', 'F', 'A#', 'Gm'] },
            { name: 'ロック進行', chords: ['A#', 'F', 'D#', 'D#'] }
        ]
    },
    'B': {
        verse: [
            { name: 'カノン進行', chords: ['B', 'F#', 'G#m', 'E'] },
            { name: '王道進行', chords: ['B', 'F#', 'G#m', 'D#m'] },
            { name: 'フォーク進行', chords: ['B', 'G#m', 'E', 'F#'] },
            { name: 'ブルース進行', chords: ['B', 'E', 'F#', 'B'] },
            { name: '小室進行', chords: ['G#m', 'E', 'F#', 'B'] }
        ],
        bridge: [
            { name: 'ツーファイブ進行', chords: ['C#m', 'F#', 'B', 'B'] },
            { name: 'サブドミナント', chords: ['E', 'F#', 'G#m', 'G#m'] },
            { name: 'セカンダリー', chords: ['G#m', 'C#', 'E', 'F#'] },
            { name: 'クリシェ', chords: ['B', 'A#', 'G#m', 'E'] }
        ],
        chorus: [
            { name: '循環コード', chords: ['B', 'G#m', 'C#m', 'F#'] },
            { name: 'ビートルズ進行', chords: ['B', 'E', 'F#', 'G#m'] },
            { name: 'J-POP王道', chords: ['E', 'F#', 'D#m', 'G#m'] },
            { name: 'アニソン進行', chords: ['E', 'F#', 'B', 'G#m'] },
            { name: 'ロック進行', chords: ['B', 'F#', 'E', 'E'] }
        ]
    }
};

// 楽曲データベース（コード進行パターン別）
const songDatabase = {
    'カノン進行': [
        { title: 'パッヘルベルのカノン', artist: 'Johann Pachelbel', genre: 'クラシック', difficulty: '初級' },
        { title: 'Don\'t Stop Believin\'', artist: 'Journey', genre: 'ロック', difficulty: '中級' },
        { title: 'With or Without You', artist: 'U2', genre: 'ロック', difficulty: '中級' },
        { title: 'Let It Be', artist: 'The Beatles', genre: 'ポップ', difficulty: '初級' },
        { title: 'Someone Like You', artist: 'Adele', genre: 'バラード', difficulty: '初級' },
        { title: 'Basket Case', artist: 'Green Day', genre: 'パンク', difficulty: '中級' },
        { title: 'ひまわりの約束', artist: '秦基博', genre: 'J-POP', difficulty: '初級' },
        { title: '糸', artist: '中島みゆき', genre: 'J-POP', difficulty: '初級' }
    ],
    '王道進行': [
        { title: 'さくらんぼ', artist: '大塚愛', genre: 'J-POP', difficulty: '初級' },
        { title: '津軽海峡冬景色', artist: '石川さゆり', genre: '演歌', difficulty: '中級' },
        { title: 'Just The Way You Are', artist: 'Bruno Mars', genre: 'ポップ', difficulty: '中級' },
        { title: '恋', artist: '星野源', genre: 'J-POP', difficulty: '初級' },
        { title: 'Everything', artist: 'MISIA', genre: 'R&B', difficulty: '上級' },
        { title: '3月9日', artist: 'レミオロメン', genre: 'J-POP', difficulty: '初級' },
        { title: '未来予想図II', artist: 'DREAMS COME TRUE', genre: 'J-POP', difficulty: '中級' }
    ],
    'Let It Be進行': [
        { title: 'Let It Be', artist: 'The Beatles', genre: 'ポップ', difficulty: '初級' },
        { title: 'Hey Jude', artist: 'The Beatles', genre: 'ポップ', difficulty: '初級' },
        { title: 'No Woman No Cry', artist: 'Bob Marley', genre: 'レゲエ', difficulty: '中級' },
        { title: 'Stand By Me', artist: 'Ben E. King', genre: 'R&B', difficulty: '初級' },
        { title: 'Take Me Home, Country Roads', artist: 'John Denver', genre: 'カントリー', difficulty: '初級' },
        { title: '贈る言葉', artist: '海援隊', genre: 'フォーク', difficulty: '初級' }
    ],
    'スタンドバイミー': [
        { title: 'Stand By Me', artist: 'Ben E. King', genre: 'R&B', difficulty: '初級' },
        { title: 'Earth Angel', artist: 'The Penguins', genre: 'ドゥーワップ', difficulty: '初級' },
        { title: 'Duke of Earl', artist: 'Gene Chandler', genre: 'R&B', difficulty: '初級' },
        { title: '青春', artist: '毛皮のマリーズ', genre: 'J-POP', difficulty: '中級' }
    ],
    '小室進行': [
        { title: 'CAN YOU CELEBRATE?', artist: '安室奈美恵', genre: 'J-POP', difficulty: '中級' },
        { title: 'DEPARTURES', artist: 'globe', genre: 'J-POP', difficulty: '中級' },
        { title: 'WOW WAR TONIGHT', artist: 'H Jungle with t', genre: 'J-POP', difficulty: '中級' },
        { title: 'GET WILD', artist: 'TM NETWORK', genre: 'J-POP', difficulty: '上級' },
        { title: 'LOVE LOVE LOVE', artist: 'DREAMS COME TRUE', genre: 'J-POP', difficulty: '中級' },
        { title: 'My Revolution', artist: '渡辺美里', genre: 'J-POP', difficulty: '中級' }
    ],
    'フォーク進行': [
        { title: '乾杯', artist: '長渕剛', genre: 'フォーク', difficulty: '初級' },
        { title: '贈る言葉', artist: '海援隊', genre: 'フォーク', difficulty: '初級' },
        { title: '心の旅', artist: 'チューリップ', genre: 'フォーク', difficulty: '初級' },
        { title: 'Blowin\' in the Wind', artist: 'Bob Dylan', genre: 'フォーク', difficulty: '初級' },
        { title: 'The Sound of Silence', artist: 'Simon & Garfunkel', genre: 'フォーク', difficulty: '中級' },
        { title: '津軽海峡冬景色', artist: '石川さゆり', genre: '演歌', difficulty: '中級' }
    ],
    'ブルース進行': [
        { title: 'Sweet Home Chicago', artist: 'Robert Johnson', genre: 'ブルース', difficulty: '中級' },
        { title: 'Stormy Monday', artist: 'T-Bone Walker', genre: 'ブルース', difficulty: '上級' },
        { title: 'Pride and Joy', artist: 'Stevie Ray Vaughan', genre: 'ブルース', difficulty: '上級' },
        { title: 'Johnny B. Goode', artist: 'Chuck Berry', genre: 'ロックンロール', difficulty: '中級' },
        { title: 'Hound Dog', artist: 'Elvis Presley', genre: 'ロックンロール', difficulty: '初級' }
    ],
    'ツーファイブ進行': [
        { title: 'All The Things You Are', artist: 'Jerome Kern', genre: 'ジャズ', difficulty: '上級' },
        { title: 'Autumn Leaves', artist: 'Joseph Kosma', genre: 'ジャズ', difficulty: '上級' },
        { title: 'Fly Me to the Moon', artist: 'Frank Sinatra', genre: 'ジャズ', difficulty: '中級' },
        { title: 'Girl from Ipanema', artist: 'Stan Getz', genre: 'ボサノバ', difficulty: '中級' },
        { title: 'Take Five', artist: 'Dave Brubeck', genre: 'ジャズ', difficulty: '上級' }
    ],
    '循環コード': [
        { title: '上を向いて歩こう', artist: '坂本九', genre: 'J-POP', difficulty: '初級' },
        { title: '津軽海峡冬景色', artist: '石川さゆり', genre: '演歌', difficulty: '中級' },
        { title: '涙そうそう', artist: '夏川りみ', genre: '沖縄', difficulty: '初級' },
        { title: '花', artist: '中島らも', genre: 'フォーク', difficulty: '初級' },
        { title: '心の旅', artist: 'チューリップ', genre: 'フォーク', difficulty: '初級' }
    ],
    'ビートルズ進行': [
        { title: 'Yesterday', artist: 'The Beatles', genre: 'ポップ', difficulty: '中級' },
        { title: 'Hey Jude', artist: 'The Beatles', genre: 'ポップ', difficulty: '初級' },
        { title: 'Let It Be', artist: 'The Beatles', genre: 'ポップ', difficulty: '初級' },
        { title: 'The Long and Winding Road', artist: 'The Beatles', genre: 'ポップ', difficulty: '中級' },
        { title: 'Here Comes the Sun', artist: 'The Beatles', genre: 'ポップ', difficulty: '中級' }
    ],
    'J-POP王道': [
        { title: 'チェリー', artist: 'スピッツ', genre: 'J-POP', difficulty: '初級' },
        { title: '空も飛べるはず', artist: 'スピッツ', genre: 'J-POP', difficulty: '初級' },
        { title: '世界に一つだけの花', artist: 'SMAP', genre: 'J-POP', difficulty: '初級' },
        { title: '恋', artist: '星野源', genre: 'J-POP', difficulty: '初級' },
        { title: '365日の紙飛行機', artist: 'AKB48', genre: 'J-POP', difficulty: '初級' },
        { title: '愛をこめて花束を', artist: 'Superfly', genre: 'J-POP', difficulty: '中級' }
    ],
    'アニソン進行': [
        { title: '残酷な天使のテーゼ', artist: '高橋洋子', genre: 'アニソン', difficulty: '中級' },
        { title: 'ガッチャマンの歌', artist: '子門真人', genre: 'アニソン', difficulty: '初級' },
        { title: 'タッチ', artist: '岩崎良美', genre: 'アニソン', difficulty: '初級' },
        { title: '宇宙戦艦ヤマト', artist: 'ささきいさお', genre: 'アニソン', difficulty: '中級' },
        { title: '紅蓮華', artist: 'LiSA', genre: 'アニソン', difficulty: '中級' },
        { title: '炎', artist: 'LiSA', genre: 'アニソン', difficulty: '中級' }
    ],
    'ロック進行': [
        { title: 'Wild Thing', artist: 'The Troggs', genre: 'ロック', difficulty: '初級' },
        { title: 'Louie Louie', artist: 'The Kingsmen', genre: 'ロック', difficulty: '初級' },
        { title: 'Wonderwall', artist: 'Oasis', genre: 'ロック', difficulty: '中級' },
        { title: 'Zombie', artist: 'The Cranberries', genre: 'ロック', difficulty: '中級' },
        { title: 'Brain Stew', artist: 'Green Day', genre: 'パンク', difficulty: '中級' }
    ],
    'Wonderwall': [
        { title: 'Wonderwall', artist: 'Oasis', genre: 'ロック', difficulty: '中級' },
        { title: 'Don\'t Look Back in Anger', artist: 'Oasis', genre: 'ロック', difficulty: '中級' },
        { title: 'Champagne Supernova', artist: 'Oasis', genre: 'ロック', difficulty: '上級' },
        { title: 'Live Forever', artist: 'Oasis', genre: 'ロック', difficulty: '中級' }
    ],
    'ジャズ風': [
        { title: 'Fly Me to the Moon', artist: 'Frank Sinatra', genre: 'ジャズ', difficulty: '中級' },
        { title: 'The Way You Look Tonight', artist: 'Frank Sinatra', genre: 'ジャズ', difficulty: '上級' },
        { title: 'Summertime', artist: 'George Gershwin', genre: 'ジャズ', difficulty: '上級' },
        { title: 'Blue Moon', artist: 'Billie Holiday', genre: 'ジャズ', difficulty: '中級' },
        { title: 'All of Me', artist: 'John Legend', genre: 'ポップ', difficulty: '中級' }
    ],
    'モダン': [
        { title: 'Someone Like You', artist: 'Adele', genre: 'バラード', difficulty: '初級' },
        { title: 'All of Me', artist: 'John Legend', genre: 'ポップ', difficulty: '中級' },
        { title: 'Perfect', artist: 'Ed Sheeran', genre: 'ポップ', difficulty: '中級' },
        { title: 'Thinking Out Loud', artist: 'Ed Sheeran', genre: 'ポップ', difficulty: '中級' },
        { title: 'Stay', artist: 'Rihanna', genre: 'ポップ', difficulty: '初級' }
    ]
};

// ウクレレコードの運指データ
const chordFingerings = {
    // Major chords
    'C': ['0003', 'G-C-E-A'],
    'C#': ['1114', 'G-C-E-A'],
    'D': ['2220', 'G-C-E-A'],
    'D#': ['3331', 'G-C-E-A'],
    'E': ['4442', 'G-C-E-A'],
    'F': ['2010', 'G-C-E-A'],
    'F#': ['3121', 'G-C-E-A'],
    'G': ['0232', 'G-C-E-A'],
    'G#': ['5343', 'G-C-E-A'],
    'A': ['2100', 'G-C-E-A'],
    'A#': ['3211', 'G-C-E-A'],
    'B': ['4322', 'G-C-E-A'],
    
    // Minor chords
    'Am': ['2000', 'G-C-E-A'],
    'A#m': ['3111', 'G-C-E-A'],
    'Bm': ['4222', 'G-C-E-A'],
    'Cm': ['0333', 'G-C-E-A'],
    'C#m': ['1444', 'G-C-E-A'],
    'Dm': ['2210', 'G-C-E-A'],
    'D#m': ['3321', 'G-C-E-A'],
    'Em': ['0432', 'G-C-E-A'],
    'Fm': ['1013', 'G-C-E-A'],
    'F#m': ['2120', 'G-C-E-A'],
    'Gm': ['0231', 'G-C-E-A'],
    'G#m': ['1342', 'G-C-E-A'],
    
    // Additional slash chords and variations
    'C/B': ['2003', 'G-C-E-A'],
    'G/F#': ['2030', 'G-C-E-A'],
    'D/C#': ['2020', 'G-C-E-A'],
    'F/E': ['1010', 'G-C-E-A'],
    
    // 7th chords
    'C7': ['0001', 'G-C-E-A'],
    'D7': ['2223', 'G-C-E-A'],
    'E7': ['1202', 'G-C-E-A'],
    'F7': ['2313', 'G-C-E-A'],
    'G7': ['0212', 'G-C-E-A'],
    'A7': ['0100', 'G-C-E-A'],
    'B7': ['2322', 'G-C-E-A'],
    
    // Major 7th chords
    'Cmaj7': ['0002', 'G-C-E-A'],
    'Dmaj7': ['2222', 'G-C-E-A'],
    'Emaj7': ['1101', 'G-C-E-A'],
    'Fmaj7': ['2410', 'G-C-E-A'],
    'Gmaj7': ['0221', 'G-C-E-A'],
    'Amaj7': ['1100', 'G-C-E-A'],
    'Bmaj7': ['3211', 'G-C-E-A'],
    
    // Minor 7th chords
    'Am7': ['0000', 'G-C-E-A'],
    'Bm7': ['2202', 'G-C-E-A'],
    'Cm7': ['3333', 'G-C-E-A'],
    'Dm7': ['2213', 'G-C-E-A'],
    'Em7': ['0202', 'G-C-E-A'],
    'Fm7': ['1313', 'G-C-E-A'],
    'Gm7': ['0211', 'G-C-E-A'],
    
    // Sus4 chords
    'Csus4': ['0013', 'G-C-E-A'],
    'Dsus4': ['0230', 'G-C-E-A'],
    'Esus4': ['2452', 'G-C-E-A'],
    'Fsus4': ['3011', 'G-C-E-A'],
    'Gsus4': ['0233', 'G-C-E-A'],
    'Asus4': ['2200', 'G-C-E-A'],
    'Bsus4': ['4422', 'G-C-E-A'],
    
    // Sus2 chords
    'Csus2': ['0233', 'G-C-E-A'],
    'Dsus2': ['2200', 'G-C-E-A'],
    'Esus2': ['4422', 'G-C-E-A'],
    'Fsus2': ['0011', 'G-C-E-A'],
    'Gsus2': ['0230', 'G-C-E-A'],
    'Asus2': ['2452', 'G-C-E-A'],
    'Bsus2': ['4200', 'G-C-E-A'],
    
    // Add9 chords
    'Cadd9': ['0203', 'G-C-E-A'],
    'Dadd9': ['2420', 'G-C-E-A'],
    'Eadd9': ['1402', 'G-C-E-A'],
    'Fadd9': ['0213', 'G-C-E-A'],
    'Gadd9': ['0432', 'G-C-E-A'],
    'Aadd9': ['2102', 'G-C-E-A'],
    'Badd9': ['4324', 'G-C-E-A'],
    
    // 6th chords
    'C6': ['0000', 'G-C-E-A'],
    'D6': ['2222', 'G-C-E-A'],
    'E6': ['4444', 'G-C-E-A'],
    'F6': ['2213', 'G-C-E-A'],
    'G6': ['0202', 'G-C-E-A'],
    'A6': ['2424', 'G-C-E-A'],
    'B6': ['1313', 'G-C-E-A'],
    
    // Diminished chords
    'Cdim': ['0101', 'G-C-E-A'],
    'Ddim': ['1212', 'G-C-E-A'],
    'Edim': ['0101', 'G-C-E-A'],
    'Fdim': ['1010', 'G-C-E-A'],
    'Gdim': ['0101', 'G-C-E-A'],
    'Adim': ['2323', 'G-C-E-A'],
    'Bdim': ['1212', 'G-C-E-A'],
    
    // Augmented chords
    'Caug': ['1003', 'G-C-E-A'],
    'Daug': ['3221', 'G-C-E-A'],
    'Eaug': ['1003', 'G-C-E-A'],
    'Faug': ['2114', 'G-C-E-A'],
    'Gaug': ['0332', 'G-C-E-A'],
    'Aaug': ['2114', 'G-C-E-A'],
    'Baug': ['0332', 'G-C-E-A']
};

// 音声合成クラス
class AudioSynthesizer {
    constructor() {
        this.audioContext = null;
        this.initAudio();
    }

    async initAudio() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (error) {
            console.log('Web Audio API not supported');
        }
    }

    // 各弦の基本周波数（ウクレレのチューニング：G-C-E-A）
    getStringFrequencies() {
        return {
            'G': 392.00,  // G4
            'C': 261.63,  // C4  
            'E': 329.63,  // E4
            'A': 440.00   // A4
        };
    }

    // フレット番号から周波数を計算
    fretToFrequency(baseFreq, fret) {
        return baseFreq * Math.pow(2, fret / 12);
    }

    // コード音を再生
    async playChord(chordName) {
        if (!this.audioContext) {
            await this.initAudio();
        }

        if (!this.audioContext) return;

        // AudioContextの状態確認
        if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }

        const fingering = chordFingerings[chordName];
        if (!fingering) return;

        const frets = fingering[0].split('').map(f => parseInt(f));
        const strings = ['G', 'C', 'E', 'A'];
        const baseFreqs = this.getStringFrequencies();

        // 各弦の音を同時再生
        strings.forEach((string, index) => {
            const fret = frets[index];
            const frequency = this.fretToFrequency(baseFreqs[string], fret);
            this.playNote(frequency, 0.8, index * 0.05); // 少しずつ遅延させて自然な音に
        });
    }

    // 単一の音を再生
    playNote(frequency, duration, delay = 0) {
        const gainNode = this.audioContext.createGain();
        const oscillator = this.audioContext.createOscillator();

        // オシレーターの設定
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime + delay);

        // エンベロープ（音の変化）設定
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime + delay);
        gainNode.gain.linearRampToValueAtTime(0.3, this.audioContext.currentTime + delay + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.1, this.audioContext.currentTime + delay + 0.3);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + delay + duration);

        // 接続
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);

        // 再生開始・停止
        oscillator.start(this.audioContext.currentTime + delay);
        oscillator.stop(this.audioContext.currentTime + delay + duration);
    }
}

// アプリケーションクラス
class UkuleleApp {
    constructor() {
        this.selectedKey = null;
        this.currentSection = 'verse';
        this.audioSynth = new AudioSynthesizer();
        this.currentSongs = [];
        this.currentProgression = '';
        this.init();
    }

    init() {
        this.createKeyButtons();
        this.setupEventListeners();
        this.setupSongListControls();
    }

    createKeyButtons() {
        const keyButtonsContainer = document.querySelector('.key-buttons');
        const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        
        keys.forEach(key => {
            const button = document.createElement('button');
            button.className = 'key-button';
            button.textContent = key;
            button.dataset.key = key;
            button.onclick = () => this.selectKey(key);
            keyButtonsContainer.appendChild(button);
        });
    }

    setupEventListeners() {
        // セクションタブのイベントリスナー
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.switchSection(section);
            });
        });
    }

    setupSongListControls() {
        // ジャンルフィルターの初期化
        this.initializeGenreFilter();
        
        // フィルターのイベントリスナー
        document.getElementById('genre-filter').addEventListener('change', () => {
            this.filterSongs();
        });
        
        document.getElementById('difficulty-filter').addEventListener('change', () => {
            this.filterSongs();
        });
        
        // 楽曲リストを閉じるボタン
        document.getElementById('close-song-list').addEventListener('click', () => {
            this.closeSongList();
        });
    }

    initializeGenreFilter() {
        const allGenres = new Set();
        Object.values(songDatabase).forEach(songs => {
            songs.forEach(song => allGenres.add(song.genre));
        });
        
        const genreFilter = document.getElementById('genre-filter');
        Array.from(allGenres).sort().forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            genreFilter.appendChild(option);
        });
    }

    selectKey(key) {
        // 前の選択をクリア
        document.querySelectorAll('.key-button').forEach(btn => {
            btn.classList.remove('selected');
            btn.style.transform = '';
        });

        // 新しい選択をハイライト
        const selectedButton = document.querySelector(`[data-key="${key}"]`);
        selectedButton.classList.add('selected');
        
        // 選択アニメーション
        selectedButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            selectedButton.style.transform = '';
        }, 200);
        
        this.selectedKey = key;
        this.showChordProgressions();
    }

    showChordProgressions() {
        const chordProgressionsSection = document.getElementById('chord-progressions');
        chordProgressionsSection.style.display = 'block';
        
        // アニメーション効果
        chordProgressionsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });

        // 段階的な表示アニメーション
        setTimeout(() => {
            this.updateChordDisplay();
            this.animateChordCardsEntry();
        }, 300);
    }

    animateChordCardsEntry() {
        const chordCards = document.querySelectorAll('.chord-card');
        chordCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.8)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        });
    }

    switchSection(section) {
        // タブボタンの状態更新
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-section="${section}"]`).classList.add('active');

        // セクションの表示切り替え
        document.querySelectorAll('.chord-section').forEach(sec => {
            sec.classList.remove('active');
        });
        document.getElementById(`${section}-section`).classList.add('active');

        this.currentSection = section;
        this.updateChordDisplay();
    }

    updateChordDisplay() {
        if (!this.selectedKey) return;

        const sectionElement = document.getElementById(`${this.currentSection}-section`);
        const progressions = chordProgressions[this.selectedKey]?.[this.currentSection] || [];

        sectionElement.innerHTML = '';

        progressions.forEach(progression => {
            const patternDiv = document.createElement('div');
            patternDiv.className = 'chord-pattern';
            
            const title = document.createElement('h3');
            title.textContent = progression.name;
            title.style.cursor = 'pointer';
            title.onclick = () => this.showSongList(progression.name);
            patternDiv.appendChild(title);

            // 楽曲リストボタンを追加
            const songListButton = document.createElement('button');
            songListButton.className = 'song-list-button';
            songListButton.innerHTML = '🎵 楽曲を見る';
            songListButton.onclick = (e) => {
                e.stopPropagation();
                this.showSongList(progression.name);
            };
            
            const titleRow = document.createElement('div');
            titleRow.style.display = 'flex';
            titleRow.style.justifyContent = 'space-between';
            titleRow.style.alignItems = 'center';
            titleRow.style.marginBottom = '16px';
            
            titleRow.appendChild(title);
            titleRow.appendChild(songListButton);
            patternDiv.appendChild(titleRow);

            const chordRow = document.createElement('div');
            chordRow.className = 'chord-row';

            progression.chords.forEach(chord => {
                const chordCard = this.createChordCard(chord);
                chordRow.appendChild(chordCard);
            });

            patternDiv.appendChild(chordRow);
            sectionElement.appendChild(patternDiv);
        });
    }

    createChordCard(chordName) {
        const card = document.createElement('div');
        card.className = 'chord-card';
        card.onclick = () => this.playChord(chordName);

        const name = document.createElement('div');
        name.className = 'chord-name';
        name.textContent = chordName;

        const fingering = document.createElement('div');
        fingering.className = 'chord-fingering';
        
        const fingeringData = chordFingerings[chordName];
        if (fingeringData) {
            fingering.innerHTML = `
                <div>${fingeringData[0]}</div>
                <div style="font-size: 0.8em; margin-top: 4px;">${fingeringData[1]}</div>
            `;
        }

        card.appendChild(name);
        card.appendChild(fingering);

        return card;
    }

    showSongList(progressionName) {
        this.currentProgression = progressionName;
        this.currentSongs = songDatabase[progressionName] || [];
        
        // 進行名を表示
        document.getElementById('current-progression-name').textContent = progressionName;
        
        // フィルターをリセット
        document.getElementById('genre-filter').value = 'all';
        document.getElementById('difficulty-filter').value = 'all';
        
        // 楽曲を表示
        this.displaySongs(this.currentSongs);
        
        // 楽曲リストセクションを表示
        const songListSection = document.getElementById('song-list-section');
        songListSection.style.display = 'block';
        
        // スムーズスクロール
        setTimeout(() => {
            songListSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    }

    displaySongs(songs) {
        const songGrid = document.getElementById('song-grid');
        songGrid.innerHTML = '';
        
        if (songs.length === 0) {
            songGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); grid-column: 1 / -1;">楽曲が見つかりませんでした。</p>';
            return;
        }
        
        songs.forEach((song, index) => {
            const songCard = this.createSongCard(song);
            
            // アニメーション用の初期状態
            songCard.style.opacity = '0';
            songCard.style.transform = 'translateY(20px)';
            
            songGrid.appendChild(songCard);
            
            // 段階的表示アニメーション
            setTimeout(() => {
                songCard.style.transition = 'all 0.4s ease';
                songCard.style.opacity = '1';
                songCard.style.transform = 'translateY(0)';
            }, index * 50);
        });
    }

    createSongCard(song) {
        const card = document.createElement('div');
        card.className = 'song-card';
        
        card.innerHTML = `
            <div class="song-title">${song.title}</div>
            <div class="song-artist">${song.artist}</div>
            <div class="song-details">
                <span class="song-genre">${song.genre}</span>
                <span class="song-difficulty ${song.difficulty}">${song.difficulty}</span>
            </div>
        `;
        
        return card;
    }

    filterSongs() {
        const genreFilter = document.getElementById('genre-filter').value;
        const difficultyFilter = document.getElementById('difficulty-filter').value;
        
        let filteredSongs = this.currentSongs;
        
        if (genreFilter !== 'all') {
            filteredSongs = filteredSongs.filter(song => song.genre === genreFilter);
        }
        
        if (difficultyFilter !== 'all') {
            filteredSongs = filteredSongs.filter(song => song.difficulty === difficultyFilter);
        }
        
        this.displaySongs(filteredSongs);
    }

    closeSongList() {
        const songListSection = document.getElementById('song-list-section');
        songListSection.style.display = 'none';
        
        // コード進行セクションにスクロール
        document.getElementById('chord-progressions').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }

    async playChord(chordName) {
        // 音声再生
        await this.audioSynth.playChord(chordName);
        
        // 視覚的フィードバック
        const chordCards = document.querySelectorAll('.chord-card');
        chordCards.forEach(card => {
            if (card.querySelector('.chord-name').textContent === chordName) {
                card.style.transform = 'scale(0.95)';
                card.style.boxShadow = '0 0 20px rgba(102, 126, 234, 0.6)';
                setTimeout(() => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                }, 300);
            }
        });
    }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', () => {
    new UkuleleApp();
});