import { useLanguage } from '../i18n';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <button
            onClick={toggleLanguage}
            className="group flex items-center gap-2 px-3 py-2 bg-warm-gray-100 hover:bg-sunset-orange/10 rounded-full transition-all duration-300"
            aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
        >
            <Globe className="w-4 h-4 text-warm-gray-500 group-hover:text-sunset-orange transition-colors" />
            <div className="flex items-center gap-1 text-sm font-medium">
                <span
                    className={`transition-colors ${language === 'en'
                            ? 'text-sunset-orange font-bold'
                            : 'text-warm-gray-400 hover:text-warm-gray-600'
                        }`}
                >
                    EN
                </span>
                <span className="text-warm-gray-300">|</span>
                <span
                    className={`transition-colors ${language === 'es'
                            ? 'text-sunset-orange font-bold'
                            : 'text-warm-gray-400 hover:text-warm-gray-600'
                        }`}
                >
                    ES
                </span>
            </div>
        </button>
    );
}
