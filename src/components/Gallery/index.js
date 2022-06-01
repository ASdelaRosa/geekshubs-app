import React, { useEffect, useState } from 'react';
import { GalleryItem } from '../GalleryItem';
import { getGallery } from '../../services/gallery';
import filterIcon from '../../resources/filterIcon.png';
import closeFilters from '../../resources/closeFilters.png';
import './style.scss';

export const Gallery = (props) =>{

    const [originalGallery, setOriginalGallery] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [filtersCategory, setFiltersCategory] = useState([]);
    const [filtersRange, setFiltersRange] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const mql850 = matchMedia('(min-width: 850px)');

    useEffect(()=>{
        getGallery().then((content)=>{
            setGallery(content);
            setOriginalGallery(content);
        });
    },[])

    const filterCategory = (e)=>{        
        let newFilters = filtersCategory;
        if (e.target.checked)
            newFilters.push(e.target.name);
        else
            newFilters = filtersCategory.filter(item=>item!==e.target.name);

        setFiltersCategory(newFilters);
        filter(newFilters, filtersRange);
    }
    
    const filterRange = (e)=>{
        let newFilters = filtersRange;
        if (e.target.checked)
            newFilters.push(e.target.name);
        else
            newFilters = filtersRange.filter(item=>item!==e.target.name);
        
        setFiltersRange(newFilters);
        filter(filtersCategory, newFilters);
    }
    
    const inRange = (ranges, price)=>{
        return ranges.map((range)=>{
            switch(range){
                case 'lower20':
                    return price<=20;
                case 'greater20':
                    return price>=20 && price<=100
                case 'greater100':
                    return price>=100 && price<=200
                case 'more200':
                    return price>=200
                default:
                    return false;
                }
            }).some(item=>item);
    }
    
    const filter = (categories, ranges)=>{
        setGallery((categories.length || ranges.length) ? 
            originalGallery.filter((item)=>{
                return (
                    (!categories.length || categories.includes(item.category))
                    &&
                    (!ranges.length || inRange(ranges, item.price))
                );
            })
            :
            originalGallery);
    }

    const clearFilter = () =>{
        setGallery(originalGallery);
        setFiltersCategory([]);
        setFiltersRange([]);
        setShowFilters(false);
    }

    const sort = (e)=>{
        let sortedGallery = originalGallery;
        switch(e.target.value){
            case 'price':
                sortedGallery = gallery.slice().sort((a,b)=>a.price-b.price);
                break;
            case 'name':
                sortedGallery = gallery.slice().sort((a,b)=>a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
                break;
            case 'category':
                sortedGallery = gallery.slice().sort((a,b)=>a.category.toLowerCase().localeCompare(b.category.toLowerCase()));
                break;
            default:
                break;
        }
        setGallery(sortedGallery);
    }

    return (
        <>
            <div className="gallery_header">
                <h1>Photography / Premium Photos</h1>
                {mql850.matches && <div>
                    <p>
                        Sort By 
                        <select className="sort_select" onChange={sort}>
                            <option value="price">Price</option>
                            <option value="name">Name</option>
                            <option value="category">Category</option>
                        </select>
                    </p>
                </div>}
                {!mql850.matches && 
                    <img src={filterIcon} className="filter_icon" onClick={()=>setShowFilters(true)}/>
                }
            </div>
            <div className="gallery">
                {((mql850.matches) || (!mql850.matches && showFilters)) &&
                    <div className="gallery_filters">
                        <div className="filters_body">
                            {!mql850.matches && 
                                <div className="filters_header_mobile">
                                    <h2>Filters</h2>
                                    <img src={closeFilters} className="close_filters" onClick={()=>setShowFilters(false)}/>
                                </div>
                            }
                            <div className="category_filter">
                                <h3>Category</h3>
                                <ul>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="People" onChange={filterCategory} checked={filtersCategory.includes("People")}/> People
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="Premium" onChange={filterCategory} checked={filtersCategory.includes("Premium")}/> Premium
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="Pets" onChange={filterCategory} checked={filtersCategory.includes("Pets")}/> Pets
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="Food" onChange={filterCategory} checked={filtersCategory.includes("Food")}/> Food
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="Landmarks" onChange={filterCategory} checked={filtersCategory.includes("Landmarks")}/> Landmarks
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="Cities" onChange={filterCategory} checked={filtersCategory.includes("Cities")}/> Cities
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="Nature" onChange={filterCategory} checked={filtersCategory.includes("Nature")}/> Nature
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="range_filter">
                                <h3>Price Range</h3>
                                <ul>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="lower20" onChange={filterRange} checked={filtersRange.includes("lower20")}/> Lower than $20
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="greater20" onChange={filterRange} checked={filtersRange.includes("greater20")}/> $20 - $100
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="greater100" onChange={filterRange} checked={filtersRange.includes("greater100")}/> $100 - $200
                                        </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" name="more200" onChange={filterRange} checked={filtersRange.includes("more200")}/> More than $200
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {!mql850.matches && <div className="filters_footer_mobile">
                            <button className="button clear_button" onClick={clearFilter}>CLEAR</button>
                            <button className="button dark_button" onClick={()=>setShowFilters(false)}>SAVE</button>
                        </div>}
                    </div>
                }
                <div className="gallery_list">
                    {
                        gallery.map((item, key)=>{
                            return <GalleryItem item={item} key={key}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}