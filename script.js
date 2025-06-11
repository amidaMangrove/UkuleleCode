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