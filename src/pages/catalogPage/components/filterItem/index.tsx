import React, { useState, useCallback } from "react";
import parse from "html-react-parser";
import ArrowIcon from "resources/icons/arrowIcon";
import serverFetch from "library/utils/server";
import styles from "./styles.scss";
import Checkbox from "library/common/components/ui/checkbox";

interface IFilterItem {
  filterId: number;
  title: string;
}

const FilterItem = ({ filterId, title, setSubFilters, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);

	console.log('isOpen', isOpen);

  const getFilters = useCallback(() => {
		setIsOpen(!isOpen);

    if (!isOpen && !props.sub_categories) {
      serverFetch
        .get(`/categories/${filterId}`)
        .then((data) => setSubFilters(data.data.data.sub_categories, filterId));
    }
    serverFetch
      .get(`/products/category/${filterId}`, {
        headers: { "X-Oc-Image-Dimension": "347x273" },
      })
      .then((data) => props.setCatalogItemsValue(data.data.data));

		props.setActiveCategories(filterId)
  }, [filterId]);

  const setFilter = (id: string) => {
    props.setActiveItem(id);

    serverFetch
      .get(`/products/category/${filterId}/subcategory/${id}`, {
        headers: { "X-Oc-Image-Dimension": "347x273" },
      })
      .then((data) => props.setCatalogItemsValue(data.data.data));
  };

  return (
    <div className={styles.filters__block}>
      <div className={styles.filters__block_header} onClick={getFilters}>
        <p>{parse(title)}</p>

        <ArrowIcon style={{ transform: `rotate(${isOpen ? 0 : 180}deg)` }} />
      </div>

      {props.sub_categories && isOpen &&
        props.sub_categories.map((child: any) => (
          <ul className={styles.filters__block_list}>
            <li
              key={child.name}
              onClick={() => setFilter(child.category_id)}
              // onClick={() => setFilter(
              // 	child.parent,
              // 	child.childName,
              // 	!filterState[child.parent][child.childName].isSelected,
              // )}
            >
              <Checkbox
                onChange={() => {}}
                text={child.name}
                checked={child.category_id === props.activeItem}
              />
            </li>

            {Array.isArray(props.sub_categories) &&
              props.sub_categories.length === 0 && (
                <p>Item doesn't have filters</p>
              )}
          </ul>
        ))}
    </div>
  );
};

export default FilterItem;
