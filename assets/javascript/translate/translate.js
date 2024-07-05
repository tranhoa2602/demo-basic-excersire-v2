document.addEventListener('DOMContentLoaded', function () {
    i18next.use(i18nextHttpBackend).init({
        lng: 'en', // Ngôn ngữ mặc định
        fallbackLng: 'en', // Ngôn ngữ fallback
        debug: true,
        ns: ['translation'], // Namespace mặc định
        defaultNS: 'translation', // Sử dụng namespace mặc định
        backend: {
            loadPath: '/assets/locales/{{lng}}.json' // Đường dẫn tới các tệp JSON
        }
    }, function (err, t) {
        if (err) return console.error(err);
        updateContent();
    });

    function updateContent() {
        document.querySelectorAll('[data-i18n]').forEach(function (element) {
            const translationKey = element.getAttribute('data-i18n');
            const translatedText = i18next.t(translationKey);
            element.innerText = translatedText;
        });
    }

    document.getElementById('en-button').addEventListener('click', function () {
        i18next.changeLanguage('en', (err) => {
            if (err) return console.error(err);
            updateContent();
        });
    });

    document.getElementById('vi-button').addEventListener('click', function () {
        i18next.changeLanguage('vi', (err) => {
            if (err) return console.error(err);
            updateContent();
        });
    });
});
