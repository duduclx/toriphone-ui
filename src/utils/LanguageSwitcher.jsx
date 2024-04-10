import ReactCountryFlag from "react-country-flag";
import { useTranslation } from 'react-i18next';
import { Select } from "@chakra-ui/react";

const locales = {
    en: { title: 'English', lc: 'GB' },
    fr: { title: 'français', lc: 'FR' },
    es: { title: 'español', lc: 'ES' },
    it: { title: 'italiano', lc: 'IT' },
    de: { title: 'Deutsch', lc: 'DE' }
  };

 export const LocaleSwitcher = () => {

    const { i18n } = useTranslation()

    return (
        <div>
            <Select variant='unstyled' placeholder='' size='sm' width='100' >
            {Object.keys(locales).map((locale) => (
                <option key={locale} value={locales[locale].title} onClick={() => i18n.changeLanguage(locale)} selected={i18n.resolvedLanguage === locale ? true : false} >
                    <ReactCountryFlag countryCode={locales[locale].lc} />
                </option>
                
          ))}
            </Select>
      </div>
    )
  }