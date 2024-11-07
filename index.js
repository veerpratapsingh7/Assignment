
        const dateArray = ["25 Apr 2024", "02 May 2024", "09 May 2024", "31 May 2024", "21 Jun 2024"];
        const strategyArray = [
            { date: "25 Apr 2024", name: "Long Put", count: 1 },
            { date: "25 Apr 2024", name: "Bear Put Spread", count: 6 },
            { date: "25 Apr 2024", name: "Bear Call Spread", count: 7 },
            { date: "02 May 2024", name: "Bull Call Spread", count: 2 },
            { date: "02 May 2024", name: "Iron Condor", count: 1 }
        ];

        document.querySelectorAll('.toggle-button').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.toggle-button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
        function toggleDropdown() {
            const dropdown = document.getElementById('date-options');
            dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
        }
        function renderDateOptions() {
            const dateOptionsContainer = document.getElementById('date-options');
            dateArray.forEach(date => {
                const dateOption = document.createElement('div');
                dateOption.classList.add('dropdown-option');
                dateOption.innerText = date;
                dateOption.onclick = () => selectDate(date);
                dateOptionsContainer.appendChild(dateOption);
            });
        }

        function selectDate(date) {
            document.getElementById('selected-date').innerText = date;
            document.getElementById('date-options').style.display = 'none';
            renderStrategyCards(date);
        }

        function renderStrategyCards(selectedDate) {
            const strategyCardsContainer = document.getElementById('strategy-cards');
            strategyCardsContainer.innerHTML = '';

            const strategies = strategyArray.filter(strategy => strategy.date === selectedDate);
            
            if (strategies.length === 0) {
                const emptyState = document.createElement('div');
                emptyState.classList.add('empty-state');
                emptyState.innerText = `No strategies available for ${selectedDate}`;
                strategyCardsContainer.appendChild(emptyState);
            } else {
                strategies.forEach(strategy => {
                    const card = document.createElement('div');
                    card.classList.add('strategy-card');
                    card.innerHTML = `<span>${strategy.name}</span><span>${strategy.count} ${strategy.count > 1 ? 'Strategies' : 'Strategy'}</span>`;
                    strategyCardsContainer.appendChild(card);
                });
            }
        }

        // Initial setup
        renderDateOptions();
        renderStrategyCards("25 Apr 2024");
 