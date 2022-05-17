import React, { useRef, useState } from 'react';
import { FlatList } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { Menu, MenuTypeProps } from '../../components/Menu';
import { Skill } from '../../components/Skill';
import { Button } from '../../components/Button';

import { Container, Title, Input, Form, FormTitle } from './styles';

export function Home() {
  const [type, setType] = useState<MenuTypeProps>("soft");
  const [name, setName] = useState('');

  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <Container testID='welcome'>
      <Title>About me</Title>
      <Menu
        type={type}
        setType={setType}
      />

      <FlatList
        testID='flatlist-skills'
        data={[]}
        keyExtractor={item => item}
        keyboardShouldPersistTaps='never'
        renderItem={({ item }) => (
          <Skill
            data={item}
            onEdit={() => { }}
            onRemove={() => { }}
          />
        )}
      />

      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={['1%', '35%']}
      >
        <Form>
          <FormTitle>New</FormTitle>

          <Input
            testID='input-new'
            placeholder="New skill..."
            onChangeText={setName}
            value={name}
          />

          <Button
            testID='button-add'
            title="Save"
            onPress={() => { }}
          />
        </Form>
      </BottomSheet>
    </Container>
  );
}