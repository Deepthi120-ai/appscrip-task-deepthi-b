import { FILTER_DEFINITIONS } from '../../filterConfig';
import { useFilters } from '../../context/filter-context';
import { useState } from 'react';
export const SidebarFilters = (filterOn) => {

  
  const {filters, setFilters} = useFilters();
  const [collapsedSections, setCollapsedSections] = useState({});

  const toggleCollapse = (title) => {
    setCollapsedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const toggleFilter = (section, option) => {
    const allOptions = FILTER_DEFINITIONS.find(f => f.title === section)?.options || [];
    const current = filters[section] || [];

    let updated;

    if (option === "All") {
        const isAllSelected = current.length === allOptions.length;
        updated = isAllSelected ? [] : [...allOptions]; // toggle all
    } else {
        const alreadySelected = current.includes(option);
        updated = alreadySelected
        ? current.filter((item) => item !== option)
        : [...current, option];

        // If now all options are selected, we can consider "All" selected too (optional logic)
        if (updated.length === allOptions.length) {
        // No need to add "All" string to the state — we just use it as a UI convenience
        }
  }

  setFilters({
    ...filters,
    [section]: updated,
  });
  };

//   console.log("true or false",filter.filter);
//   console.log(filters);
return (
    <aside className="sidebar">
      {filterOn.filterOn && (
        <div className="filters">
          {/* Static filter */}
          <div className="filter-section">
            <label>
              <input type="checkbox" />
              <strong>Customizable</strong>
            </label>
          </div>
  
          {/* Dynamic collapsible filters */}
          {FILTER_DEFINITIONS.map((section) => {
            const selected = filters[section.title] || [];
            const allSelected = selected.length === section.options.length;
            const isCollapsed = collapsedSections[section.title];
  
            const handleToggleAll = () => {
              setFilters((prev) => ({
                ...prev,
                [section.title]: allSelected ? [] : [...section.options],
              }));
            };
  
            return (
              <div
                key={section.title}
                className="filter-section"
              >
                {/* Collapsible title */}
                <div className="filter-title"
                  onClick={() => toggleCollapse(section.title)}
                >
                  {section.title}
                  <img className="arrow" src={isCollapsed ? `${process.env.PUBLIC_URL}/down-arrow.png` : `${process.env.PUBLIC_URL}/up-arrow.png`} alt="arrow"/>
                </div>
  
                {/* Only render filters if section is expanded */}
                {!isCollapsed && (
                  <>
                    {
                      <div className="all" >All</div>
                    }
  
                    <button className="select-link"
                      onClick={handleToggleAll}
                    >
                      {allSelected ? "Unselect all" : "Select all"}
                    </button>
  
                    {section.options.map((option) => (
                      <label key={option} className="options">
                        <input
                          type="checkbox"
                          checked={selected.includes(option)}
                          onChange={() => toggleFilter(section.title, option)}
                        />
                        {" "}{option}
                      </label>
                    ))}
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}
    </aside>
  );
}