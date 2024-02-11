import { FlatList, Text, View } from "react-native";

import {CATEGORIES} from "@/utils/data/products"
import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { useState } from "react";

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
    
    function handleCategorySelect(selectedCategory: string) {
        setSelectedCategory(selectedCategory);
    }

    return (
        <View className="flex-1 pt-8">
            <Header title="Cardápio" cartQuantityItems={1}/>
            <View className="flex-row gap-4 pt-4">
                <FlatList
                    data={CATEGORIES}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                        <CategoryButton 
                            title={item} 
                            isSelected={item === selectedCategory}
                            onPress={() => handleCategorySelect(item)} />
                    )}
                    horizontal
                    className="max-h-10"
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
                />
            </View>
        </View>
    );
}