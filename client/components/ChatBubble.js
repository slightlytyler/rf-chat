import styled from "@emotion/styled";

const ChatBubble = styled("div")`
  width: 50%;

  &:not(:first-of-type) {
    margin-top: ${props => props.theme.spacing.md};
  }
`;

const Sender = styled("div")`
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.color.darkGray};
`;

const Text = styled("div")`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background-color: ${props => props.theme.color.white};
  border-radius: 20px;
`;

ChatBubble.Sender = Sender;
ChatBubble.Text = Text;

export default ChatBubble;
