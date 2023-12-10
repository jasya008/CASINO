import React from 'react'
import { useTranslation } from 'react-i18next'
import searchIcon from "../../assets/SearchOutlined.svg"

export const SearchBar = ({ search, setSearch }) => {
    const { t } = useTranslation()

    const onSearchInputChange = (e) => setSearch(e.target.value)

    return (
        <form onSubmit={(e) => e.preventDefault()} >
            <div className="inputIcon">
                <input
                    className='searchbar'
                    type="text"
                    autoComplete='off'
                    value={search}
                    onChange={onSearchInputChange}
                    placeholder={t("searchbar_placeholder")}
                />

                <img src={searchIcon} className='icon' alt="" />
            </div>
        </form>
    )
}
