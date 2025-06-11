// ウクレレコード進行データベース
const chordProgressions = {
    'C': {
        verse: [
            { name: 'パターン1', chords: ['C', 'Am', 'F', 'G'] },
            { name: 'パターン2', chords: ['C', 'F', 'Am', 'G'] },
            { name: 'パターン3', chords: ['Am', 'F', 'C', 'G'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['Am', 'F', 'G', 'C'] },
            { name: 'パターン2', chords: ['F', 'G', 'Am', 'Am'] },
            { name: 'パターン3', chords: ['Dm', 'G', 'C', 'Am'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['F', 'G', 'C', 'Am'] },
            { name: 'パターン2', chords: ['C', 'G', 'Am', 'F'] },
            { name: 'パターン3', chords: ['Am', 'F', 'G', 'C'] }
        ]
    },
    'C#': {
        verse: [
            { name: 'パターン1', chords: ['C#', 'A#m', 'F#', 'G#'] },
            { name: 'パターン2', chords: ['C#', 'F#', 'A#m', 'G#'] },
            { name: 'パターン3', chords: ['A#m', 'F#', 'C#', 'G#'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['A#m', 'F#', 'G#', 'C#'] },
            { name: 'パターン2', chords: ['F#', 'G#', 'A#m', 'A#m'] },
            { name: 'パターン3', chords: ['D#m', 'G#', 'C#', 'A#m'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['F#', 'G#', 'C#', 'A#m'] },
            { name: 'パターン2', chords: ['C#', 'G#', 'A#m', 'F#'] },
            { name: 'パターン3', chords: ['A#m', 'F#', 'G#', 'C#'] }
        ]
    },
    'D': {
        verse: [
            { name: 'パターン1', chords: ['D', 'Bm', 'G', 'A'] },
            { name: 'パターン2', chords: ['D', 'G', 'Bm', 'A'] },
            { name: 'パターン3', chords: ['Bm', 'G', 'D', 'A'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['Bm', 'G', 'A', 'D'] },
            { name: 'パターン2', chords: ['G', 'A', 'Bm', 'Bm'] },
            { name: 'パターン3', chords: ['Em', 'A', 'D', 'Bm'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['G', 'A', 'D', 'Bm'] },
            { name: 'パターン2', chords: ['D', 'A', 'Bm', 'G'] },
            { name: 'パターン3', chords: ['Bm', 'G', 'A', 'D'] }
        ]
    },
    'D#': {
        verse: [
            { name: 'パターン1', chords: ['D#', 'Cm', 'G#', 'A#'] },
            { name: 'パターン2', chords: ['D#', 'G#', 'Cm', 'A#'] },
            { name: 'パターン3', chords: ['Cm', 'G#', 'D#', 'A#'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['Cm', 'G#', 'A#', 'D#'] },
            { name: 'パターン2', chords: ['G#', 'A#', 'Cm', 'Cm'] },
            { name: 'パターン3', chords: ['Fm', 'A#', 'D#', 'Cm'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['G#', 'A#', 'D#', 'Cm'] },
            { name: 'パターン2', chords: ['D#', 'A#', 'Cm', 'G#'] },
            { name: 'パターン3', chords: ['Cm', 'G#', 'A#', 'D#'] }
        ]
    },
    'E': {
        verse: [
            { name: 'パターン1', chords: ['E', 'C#m', 'A', 'B'] },
            { name: 'パターン2', chords: ['E', 'A', 'C#m', 'B'] },
            { name: 'パターン3', chords: ['C#m', 'A', 'E', 'B'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['C#m', 'A', 'B', 'E'] },
            { name: 'パターン2', chords: ['A', 'B', 'C#m', 'C#m'] },
            { name: 'パターン3', chords: ['F#m', 'B', 'E', 'C#m'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['A', 'B', 'E', 'C#m'] },
            { name: 'パターン2', chords: ['E', 'B', 'C#m', 'A'] },
            { name: 'パターン3', chords: ['C#m', 'A', 'B', 'E'] }
        ]
    },
    'F': {
        verse: [
            { name: 'パターン1', chords: ['F', 'Dm', 'A#', 'C'] },
            { name: 'パターン2', chords: ['F', 'A#', 'Dm', 'C'] },
            { name: 'パターン3', chords: ['Dm', 'A#', 'F', 'C'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['Dm', 'A#', 'C', 'F'] },
            { name: 'パターン2', chords: ['A#', 'C', 'Dm', 'Dm'] },
            { name: 'パターン3', chords: ['Gm', 'C', 'F', 'Dm'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['A#', 'C', 'F', 'Dm'] },
            { name: 'パターン2', chords: ['F', 'C', 'Dm', 'A#'] },
            { name: 'パターン3', chords: ['Dm', 'A#', 'C', 'F'] }
        ]
    },
    'F#': {
        verse: [
            { name: 'パターン1', chords: ['F#', 'D#m', 'B', 'C#'] },
            { name: 'パターン2', chords: ['F#', 'B', 'D#m', 'C#'] },
            { name: 'パターン3', chords: ['D#m', 'B', 'F#', 'C#'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['D#m', 'B', 'C#', 'F#'] },
            { name: 'パターン2', chords: ['B', 'C#', 'D#m', 'D#m'] },
            { name: 'パターン3', chords: ['G#m', 'C#', 'F#', 'D#m'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['B', 'C#', 'F#', 'D#m'] },
            { name: 'パターン2', chords: ['F#', 'C#', 'D#m', 'B'] },
            { name: 'パターン3', chords: ['D#m', 'B', 'C#', 'F#'] }
        ]
    },
    'G': {
        verse: [
            { name: 'パターン1', chords: ['G', 'Em', 'C', 'D'] },
            { name: 'パターン2', chords: ['G', 'C', 'Em', 'D'] },
            { name: 'パターン3', chords: ['Em', 'C', 'G', 'D'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['Em', 'C', 'D', 'G'] },
            { name: 'パターン2', chords: ['C', 'D', 'Em', 'Em'] },
            { name: 'パターン3', chords: ['Am', 'D', 'G', 'Em'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['C', 'D', 'G', 'Em'] },
            { name: 'パターン2', chords: ['G', 'D', 'Em', 'C'] },
            { name: 'パターン3', chords: ['Em', 'C', 'D', 'G'] }
        ]
    },
    'G#': {
        verse: [
            { name: 'パターン1', chords: ['G#', 'Fm', 'C#', 'D#'] },
            { name: 'パターン2', chords: ['G#', 'C#', 'Fm', 'D#'] },
            { name: 'パターン3', chords: ['Fm', 'C#', 'G#', 'D#'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['Fm', 'C#', 'D#', 'G#'] },
            { name: 'パターン2', chords: ['C#', 'D#', 'Fm', 'Fm'] },
            { name: 'パターン3', chords: ['A#m', 'D#', 'G#', 'Fm'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['C#', 'D#', 'G#', 'Fm'] },
            { name: 'パターン2', chords: ['G#', 'D#', 'Fm', 'C#'] },
            { name: 'パターン3', chords: ['Fm', 'C#', 'D#', 'G#'] }
        ]
    },
    'A': {
        verse: [
            { name: 'パターン1', chords: ['A', 'F#m', 'D', 'E'] },
            { name: 'パターン2', chords: ['A', 'D', 'F#m', 'E'] },
            { name: 'パターン3', chords: ['F#m', 'D', 'A', 'E'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['F#m', 'D', 'E', 'A'] },
            { name: 'パターン2', chords: ['D', 'E', 'F#m', 'F#m'] },
            { name: 'パターン3', chords: ['Bm', 'E', 'A', 'F#m'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['D', 'E', 'A', 'F#m'] },
            { name: 'パターン2', chords: ['A', 'E', 'F#m', 'D'] },
            { name: 'パターン3', chords: ['F#m', 'D', 'E', 'A'] }
        ]
    },
    'A#': {
        verse: [
            { name: 'パターン1', chords: ['A#', 'Gm', 'D#', 'F'] },
            { name: 'パターン2', chords: ['A#', 'D#', 'Gm', 'F'] },
            { name: 'パターン3', chords: ['Gm', 'D#', 'A#', 'F'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['Gm', 'D#', 'F', 'A#'] },
            { name: 'パターン2', chords: ['D#', 'F', 'Gm', 'Gm'] },
            { name: 'パターン3', chords: ['Cm', 'F', 'A#', 'Gm'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['D#', 'F', 'A#', 'Gm'] },
            { name: 'パターン2', chords: ['A#', 'F', 'Gm', 'D#'] },
            { name: 'パターン3', chords: ['Gm', 'D#', 'F', 'A#'] }
        ]
    },
    'B': {
        verse: [
            { name: 'パターン1', chords: ['B', 'G#m', 'E', 'F#'] },
            { name: 'パターン2', chords: ['B', 'E', 'G#m', 'F#'] },
            { name: 'パターン3', chords: ['G#m', 'E', 'B', 'F#'] }
        ],
        bridge: [
            { name: 'パターン1', chords: ['G#m', 'E', 'F#', 'B'] },
            { name: 'パターン2', chords: ['E', 'F#', 'G#m', 'G#m'] },
            { name: 'パターン3', chords: ['C#m', 'F#', 'B', 'G#m'] }
        ],
        chorus: [
            { name: 'パターン1', chords: ['E', 'F#', 'B', 'G#m'] },
            { name: 'パターン2', chords: ['B', 'F#', 'G#m', 'E'] },
            { name: 'パターン3', chords: ['G#m', 'E', 'F#', 'B'] }
        ]
    }
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
    'G#m': ['1342', 'G-C-E-A']
};

// アプリケーションクラス
class UkuleleApp {
    constructor() {
        this.selectedKey = null;
        this.currentSection = 'verse';
        this.init();
    }

    init() {
        this.createKeyButtons();
        this.setupEventListeners();
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

    selectKey(key) {
        // 前の選択をクリア
        document.querySelectorAll('.key-button').forEach(btn => {
            btn.classList.remove('selected');
        });

        // 新しい選択をハイライト
        document.querySelector(`[data-key="${key}"]`).classList.add('selected');
        
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

        this.updateChordDisplay();
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
            patternDiv.appendChild(title);

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

    playChord(chordName) {
        // 音声再生機能（後で実装）
        console.log(`Playing chord: ${chordName}`);
        
        // 視覚的フィードバック
        const chordCards = document.querySelectorAll('.chord-card');
        chordCards.forEach(card => {
            if (card.querySelector('.chord-name').textContent === chordName) {
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            }
        });
    }
}

// アプリケーション初期化
document.addEventListener('DOMContentLoaded', () => {
    new UkuleleApp();
});