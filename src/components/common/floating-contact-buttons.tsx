import { Box, IconButton, Tooltip, VStack } from '@chakra-ui/react';
import { MdPhone } from 'react-icons/md';
import { SiZalo } from 'react-icons/si';

const FloatingContactButtons: React.FC = () => {
  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex={1000}>
      <VStack spacing={3}>
        <Tooltip label="Gọi ngay" hasArrow>
          <IconButton
            as="a"
            href="tel:0911191558"
            aria-label="Gọi điện"
            icon={<MdPhone size={28} />}
            colorScheme="green"
            size="lg"
            borderRadius="full"
            boxShadow="lg"
          />
        </Tooltip>

        <Tooltip label="Chat Zalo" hasArrow>
          <IconButton
            as="a"
            href="https://zalo.me/0911191558"
            aria-label="Zalo"
            icon={<SiZalo size={28} color="#0068FF" />} // tăng size và màu xanh chuẩn Zalo
            bg="#E6F0FF" // nền xanh nhạt để nổi bật icon
            size="lg"
            borderRadius="full"
            boxShadow="lg"
            _hover={{ bg: '#CCE0FF' }}
            target="_blank"
            rel="noopener noreferrer"
          />
        </Tooltip>
      </VStack>
    </Box>
  );
};

export default FloatingContactButtons;
