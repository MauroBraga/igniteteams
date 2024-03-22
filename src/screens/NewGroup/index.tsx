import { Header } from '@components/Header';
import { Container, Content, Icon} from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from 'react-native';

export  function NewGroup() {


  return (
    <Container>

        <Header showBackButton />

        <Content>
          <Icon />
          
          <Highlight 
            title="Nova turma"
            subtitle="crie a turma para adicionar as pessoas"
          />

          <Button 
            title="Criar"
          />
        </Content>
     
    </Container>
     
  );
}
