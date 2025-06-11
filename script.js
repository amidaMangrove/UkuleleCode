// ウクレレコード進行データベース
const chordProgressions = {
    // 各キーでのコード進行パターン
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
    // 他のキーも同様に定義...
};

// ウクレレコードの運指データ
const chordFingerings = {
    'C': ['0003', 'G-C-E-A'],
    'Am': ['2000', 'G-C-E-A'],
    'F': ['2010', 'G-C-E-A'],
    'G': ['0232', 'G-C-E-A'],
    'Em': ['0432', 'G-C-E-A'],
    'D': ['2220', 'G-C-E-A'],
    'Dm': ['2210', 'G-C-E-A'],
    // 他のコードも追加...
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