import smart_chat_threads from '../src/collections/smart_chat_threads.js';
import { SmartChatThread } from '../src/items/smart_chat_thread.js';
import { render as chat_component } from '../src/components/chat.js';
import { render as completion_component } from '../src/components/completion.js';
import { render as context_review_component } from '../src/components/context_review.js';
import { render as message_assistant_component } from '../src/components/message_assistant.js';
import { render as message_user_component } from '../src/components/message_user.js';
import { render as thread_component } from '../src/components/thread.js';

export const smart_env_config = {
  collections: {
    smart_chat_threads
  },
  item_types: {
    SmartChatThread
  },
  components: {
    chat: chat_component,
    completion: completion_component,
    context_review: context_review_component,
    message_assistant: message_assistant_component,
    message_user: message_user_component,
    thread: thread_component,
  }
};
